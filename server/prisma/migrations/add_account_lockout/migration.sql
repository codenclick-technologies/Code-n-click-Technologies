-- Add account lockout fields to users table
ALTER TABLE "users" 
ADD COLUMN "failed_login_attempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "locked_until" TIMESTAMP(3),
ADD COLUMN "last_failed_login_at" TIMESTAMP(3);

-- Create index for faster lockout checks
CREATE INDEX IF NOT EXISTS "users_locked_until_idx" ON "users"("locked_until");
