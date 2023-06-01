# Technical Decision Log

| Issue# | Description | Notes | Decision | Decision Date | Further Information |
| ------ | ----------- | ----- | -------- | ------------- | ------------------- |
| 66 | Add secret scanning to GitHub repository | GitHub provides secret scanning functionality. Users will receive alerts on GitHub for detected secrets, keys, or other tokens. Push protection can be enabled which will block commits that contain [supported secrets](https://docs.github.com/en/code-security/secret-scanning/secret-scanning-patterns#supported-secrets). These settings can be found within the settings section "Code security and analysis". | Enable "Secret scanning" with "Push protection" within repository settings. Organisation administrators, repository administrators and teams with the security manager role will receive alerts when scan detects a secret. | 2023-06-01 | None |
