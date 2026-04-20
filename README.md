# Project Operations

## Short Runbook

### Deploy flow
1. Create a feature branch from `main`.
2. Make changes and open a pull request.
3. Review and merge into `main`.
4. The production deploy is triggered from `main`.
5. Verify the live deployment after the build completes.

### Branch rules
1. Do not commit directly to `main`.
2. Use short-lived feature branches for all changes.
3. Merge to `main` only through pull requests.
4. Keep `main` deployable at all times.

### Rollback steps
1. Identify the last known good commit on `main`.
2. Revert the bad commit with `git revert <commit_sha>`.
3. Push the revert to `main`.
4. Confirm the new deployment succeeds.
5. Verify the production site after rollback.

### DNS ownership and SSL behavior
1. DNS ownership stays with the configured DNS provider and account owner.
2. Any DNS record changes should be made only by the authorized owner or maintainer.
3. SSL behavior is managed by the hosting and proxy configuration.
4. Certificate provisioning and renewal are expected to happen automatically once DNS is pointed correctly.
5. If DNS is misconfigured, SSL validation or certificate issuance may fail until the records are corrected.

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
