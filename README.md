# Project Operations

## 🚀 Deployment Workflow
1. Develop on a feature branch.
2. Open a **Pull Request** to merge into `main`.
3. Merging to `main` triggers the **Cloudflare** deployment.

## ⏪ Rollback Plan

### 1. Simple Rollback (Undo Last Commit)
*If the deployment breaks production, revert the previous working commit.*
```bash
git revert HEAD --no-edit
git push origin main 
```
## 🚨 Ops: Emergency Rollback Plan

If a deployment breaks the live site and you can't remember the last push that broke prod, follow these steps to undo the change immediately:

1. **Revert the last commit**:
   `git reset --hard [tag-ID]`
2. **Push the fix to Cloudflare**:
   `git push origin [your-branch-name] --force`
3. **Verify**: Check the Cloudflare Dashboard "Deployments" tab to ensure the new "Revert" build is successful.
