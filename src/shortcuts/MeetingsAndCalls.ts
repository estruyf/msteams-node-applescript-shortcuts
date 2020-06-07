import applescript from 'applescript';

/**
 * Microsoft Teams Shortcuts
 * 
 * https://support.office.com/en-us/article/keyboard-shortcuts-for-microsoft-teams-2e8e2a70-e8d8-4a19-949b-4c36dd5292d2#bkmk_mac_calling
 */
export class MeetingsAndCalls {

  /**
   * Accept the incoming video call
   */
  public static async accept(reactivate: boolean = false): Promise<string> {
    try {
      return await this.runScript(`keystroke "a" using {shift down, command down}`, reactivate);
    } catch (e) {
      throw e;
    }
  }

  /**
   * Tell MS Teams to mute
   */
  public static async decline(reactivate: boolean = false): Promise<string> {
    try {
      return await this.runScript(`keystroke "d" using {shift down, command down}`, reactivate);
    } catch (e) {
      throw e;
    }
  }

  /**
   * Tell MS Teams to mute
   */
  public static async mute(reactivate: boolean = false): Promise<string> {
    try {
      return await this.runScript(`keystroke "m" using {shift down, command down}`, reactivate);
    } catch (e) {
      throw e;
    }
  }

  /**
   * Tell MS Teams to turn camera on or off
   */
  public static async camera(reactivate: boolean = false): Promise<string> {
    try {
      return await this.runScript(`keystroke "o" using {shift down, command down}`, reactivate);
    } catch (e) {
      throw e;
    }
  }

  /**
   * Run the Apple script
   * @param keystroke 
   */
  private static runScript(keystroke: string, reactivate: boolean = false): Promise<string>  {
    return new Promise<string>((resolve, reject) => {
      const script = `
      ${ reactivate ? "set crntAppPath to (path to frontmost application as text)" : ""}

      tell application "Microsoft Teams"
        activate
        tell application "System Events"
          ${keystroke}
        end tell
      end tell

      ${ reactivate ? `
      tell application crntAppPath
        activate
      end tell
      ` : ""}
      `;

      applescript.execString(script, (err, rtn) => {
        if (err) {
          reject(err);
          return;
        }
        
        console.log(rtn);
        resolve('Shortcut executed');
      });
    });
  }
}