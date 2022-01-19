import { ExecOptions } from '@actions/exec';
import { OS, Tool } from './opts';
export declare const exec: (cmd: string, args?: string[] | undefined, opts?: ExecOptions | undefined) => Promise<number>;
export declare function installTool(tool: Tool, version: string, os: OS): Promise<void>;
export declare function resetTool(tool: Tool, _version: string, os: OS): Promise<void>;
