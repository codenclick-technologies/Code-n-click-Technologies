/**
 * Advanced Marketing Intelligence Service
 * Handles integration with Facebook Pixel (Meta Ads) and Google Analytics 4.
 * Designed to provide "Deep" data insights for ad optimization.
 */

const MarketingService = {
    // Initialize standard trackers if not present (Safety check)
    init: () => {
        if (!window.fbq) {
            console.warn("MarketingService: Facebook Pixel not loaded. Events will be logged to console.");
            window.fbq = (a, b, c) => console.log(`[FB_PIXEL_SIMULATION] ${a}: ${b}`, c);
        }
        if (!window.gtag) {
            console.warn("MarketingService: GTM/GA4 not loaded. Events will be logged to console.");
            window.gtag = (a, b, c) => console.log(`[GA4_SIMULATION] ${a} ${b}`, c);
        }
    },

    /**
     * Track a Standard Event
     * @param {string} eventName - e.g., 'Lead', 'Contact', 'ViewContent'
     * @param {object} data - Additional data (value, currency, content_name)
     */
    trackEvent: (eventName, data = {}) => {
        try {
            // 1. Log for Debugging (Dev Mode)
            if (import.meta.env.DEV) {
                console.log(`%c[MARKETING INTELLIGENCE] Fired: ${eventName}`, 'color: #00ff00; font-weight: bold;', data);
            }

            // 2. Facebook Pixel (Meta)
            // Standard events are tracked directly. Custom events use 'trackCustom'.
            const standardEvents = ['Lead', 'ViewContent', 'Contact', 'Purchase', 'CompleteRegistration'];
            if (standardEvents.includes(eventName)) {
                window.fbq('track', eventName, data);
            } else {
                window.fbq('trackCustom', eventName, data);
            }

            // 3. Google Analytics 4 (GA4)
            window.gtag('event', eventName, {
                ...data,
                event_source: 'chatbot_ai_system'
            });

        } catch (error) {
            console.error("[MarketingService] Error tracking event:", error);
        }
    },

    /**
     * Track Chatbot Specific Interactions
     * @param {string} interactionType - e.g., 'voice_enabled', 'message_sent'
     */
    trackChatInteraction: (interactionType) => {
        MarketingService.trackEvent('ChatInteraction', {
            interaction_type: interactionType,
            timestamp: new Date().toISOString()
        });
    },

    /**
     * Track Lead Generation Success
     * Tells algorithms: "This was a high-quality user"
     */
    trackLeadCaptured: (source = 'chatbot') => {
        MarketingService.trackEvent('Lead', {
            content_name: 'AI Chatbot Lead',
            content_category: 'Business_Inquiry',
            source: source,
            value: 50.00, // Assigning a theoretical value helps Ad optimization algorithms
            currency: 'USD'
        });
    }
};

// Initialize on load
MarketingService.init();

export default MarketingService;
