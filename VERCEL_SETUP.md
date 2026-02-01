# Vercel Deployment Guide for Email Functionality

This guide will help you configure the contact form email functionality on Vercel.

## Step 1: Add Environment Variables in Vercel

1. **Go to your Vercel project dashboard**
   - Navigate to https://vercel.com/dashboard
   - Select your project (VVHA-Globals)

2. **Open Project Settings**
   - Click on your project
   - Go to **Settings** → **Environment Variables**

3. **Add the following environment variables:**

   ### Required:
   ```
   RESEND_API_KEY = re_your_api_key_here
   ```
   (Use the same API key from your `.env.local` file)

   ### Optional (for production):
   ```
   RESEND_TO_EMAIL = info@vvhaglobal.com
   RESEND_FROM_EMAIL = noreply@vvhaglobal.com
   ```
   
   **Note:** 
   - If you haven't verified your domain with Resend yet, use:
     ```
     RESEND_TO_EMAIL = atharvakalange29@gmail.com
     ```
   - Leave `RESEND_FROM_EMAIL` unset to use the default `onboarding@resend.dev`

4. **Set Environment Scope**
   - For each variable, select which environments it applies to:
     - ✅ **Production** (for your live site)
     - ✅ **Preview** (for pull request previews)
     - ✅ **Development** (optional, if you use Vercel CLI)

5. **Save the variables**
   - Click **Save** after adding each variable

## Step 2: Redeploy Your Application

After adding environment variables, you need to redeploy:

1. **Option A: Automatic Redeploy**
   - Push a new commit to your repository
   - Vercel will automatically redeploy with the new environment variables

2. **Option B: Manual Redeploy**
   - Go to **Deployments** tab
   - Click the **⋯** (three dots) on the latest deployment
   - Select **Redeploy**
   - Make sure to check **Use existing Build Cache** if you want faster deployment

## Step 3: Verify It's Working

1. Visit your live site: `https://your-domain.vercel.app` (or your custom domain)
2. Go to the contact page
3. Submit a test form
4. Check your email inbox (the email configured in `RESEND_TO_EMAIL`)

## Step 4: Domain Verification (For Production)

To send emails to `info@vvhaglobal.com` instead of your test email:

1. **Verify Domain in Resend**
   - Go to https://resend.com/domains
   - Click **Add Domain**
   - Enter `vvhaglobal.com`
   - Add the DNS records provided by Resend to your domain's DNS settings
   - Wait for verification (usually takes a few minutes)

2. **Update Vercel Environment Variables**
   - Go back to Vercel → Settings → Environment Variables
   - Update `RESEND_TO_EMAIL` to `info@vvhaglobal.com`
   - Update `RESEND_FROM_EMAIL` to `noreply@vvhaglobal.com` (or any email from your verified domain)
   - Redeploy your application

## Troubleshooting

### Emails not sending?
1. Check Vercel logs:
   - Go to **Deployments** → Click on latest deployment → **Functions** tab
   - Look for any errors in the `/api/contact` function logs

2. Verify environment variables:
   - Make sure `RESEND_API_KEY` is set correctly
   - Check that variables are enabled for **Production** environment

3. Test API key:
   - Verify your Resend API key is valid at https://resend.com/api-keys

### Getting "validation_error"?
- This means you're trying to send to an email that's not allowed
- For testing: Use your Resend account email (`atharvakalange29@gmail.com`)
- For production: Verify your domain with Resend first

## Quick Checklist

- [ ] Added `RESEND_API_KEY` to Vercel environment variables
- [ ] Added `RESEND_TO_EMAIL` (if different from default)
- [ ] Added `RESEND_FROM_EMAIL` (if domain is verified)
- [ ] Set environment scope (Production, Preview)
- [ ] Redeployed the application
- [ ] Tested the contact form on live site
- [ ] Verified domain with Resend (for production emails)

## Security Notes

- ✅ Environment variables in Vercel are encrypted and secure
- ✅ Never commit `.env.local` files to your repository
- ✅ Use different API keys for development and production if needed
- ✅ Regularly rotate your API keys for security

---

**Need Help?** Check the Vercel documentation: https://vercel.com/docs/environment-variables
