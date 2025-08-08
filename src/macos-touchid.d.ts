declare module "macos-touchid" {
  export function canAuthenticate(): boolean;
  /**
   * Attempts Touch ID / local auth.
   * @param reason The user-visible reason string
   * @param callback (error, didAuthenticate) — if error is null and didAuthenticate is false, user cancelled or did not authenticate
   */
  export function authenticate(reason: string, callback: (error: Error | null, didAuthenticate: boolean) => void): void;
}
