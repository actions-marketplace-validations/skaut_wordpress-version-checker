import { CustomError } from 'ts-custom-error';

import {repoName} from '../repo'

export class GetIssueError extends CustomError {
	public constructor(e: any) {
		super('Couldn\'t get existing issue for repository ' + repoName + '. Error message: ' + String(e));
	}
}
