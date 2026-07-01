export function getEnvVar(name: string): string {
    const value = process.env[name];
    if (!value?.trim()) {
        throw new Error(
            `Missing environment variable ${name}. Add it to repo-root .env (see web/.env.example).`
        );

    }
    return value?.trim();
}