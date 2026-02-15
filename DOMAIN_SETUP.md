# Domain Setup Guide: rehanperera.space

Connecting your Hostinger domain to GitHub Pages requires two main steps: configuring GitHub and updating your DNS records in Hostinger.

## Step 1: GitHub Configuration
1. **GitHub Repository Settings**:
   - Go to your repository on GitHub.
   - Click **Settings** > **Pages**.
   - Under **Custom domain**, enter `rehanperera.space`.
   - Click **Save**.
   - Check **Enforce HTTPS** (it might take a few minutes to become available).

## Step 2: Hostinger DNS Settings
Log in to your Hostinger account, go to the **DNS / Nameservers** section for `rehanperera.space`, and add/update the following records:

### A Records (Point to GitHub IP addresses)
Add these 4 records (use `@` for the Host/Name):
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### CNAME Record (For www redirect)
- **Host**: `www`
- **Points to**: `Rehanperer.github.io` (your GitHub username followed by .github.io)

---

> [!NOTE]
> DNS changes can take anywhere from a few minutes to 24 hours to propagate globally. Once finished, your site will be accessible at `https://rehanperera.space`.
