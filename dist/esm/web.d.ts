import { WebPlugin } from "@capacitor/core";
import {
  SignInWithApplePlugin,
  ResponseSignInWithApplePlugin,
} from "./definitions";
export declare class SignInWithAppleWeb extends WebPlugin
  implements SignInWithApplePlugin {
  constructor();
  Authorize(): Promise<ResponseSignInWithApplePlugin>;
}
declare const SignInWithApple: SignInWithAppleWeb;
export { SignInWithApple };
