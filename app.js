"use strict";
const express = require("express");
class Server {
    constructor() {
        this.app = express();
        this.config();
    }
    static bootstrap() {
        return new Server();
    }
}
