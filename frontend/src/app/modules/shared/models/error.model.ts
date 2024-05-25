/**
 * API error response body
 */
export class ErrorResponse {
  errors!: Error[];
}

/**
 * A single error returned by Unity Console API
 */
export class Error {
  error!: string;
  code!: string;
  message!: string;
}

export class ErrorModel {
  errorKey: string = '';
  statusCode: number = 200;

  constructor(errorKey: string, statusCode: number = 200) {
    this.errorKey = errorKey;
    this.statusCode = statusCode;
  }
}
