import { Request, Response } from "express";
import { Endpoint, Get } from "../base";

export class PingEndpoint extends Endpoint {
    public constructor() {
        super("/ping");
    }

    @Get()
    public ping(_request: Request, response: Response): void {
        this.sendOk(response);
    }
}
