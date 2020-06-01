"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chakram = require("chakram");
function assertRequest(ports, method, route, dataOrCallback, dataOrRequestOptionsOrCallback, maybeCallback) {
    var _this = this;
    var args = arguments.length;
    ports.forEach(function (port) {
        it("asserting port " + port, function () { return __awaiter(_this, void 0, void 0, function () {
            var unhandledRejection, captureRejection, r, e;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        unhandledRejection = undefined;
                        captureRejection = function (e) { unhandledRejection = e; };
                        process.on("unhandledRejection", captureRejection);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 9, 10]);
                        r = void 0;
                        if (!(args === 4)) return [3 /*break*/, 3];
                        return [4 /*yield*/, chakram[method]("http://127.0.0.1:" + port + "/" + route).then(dataOrCallback)];
                    case 2:
                        r = _a.sent();
                        return [3 /*break*/, 8];
                    case 3:
                        if (!(args === 5)) return [3 /*break*/, 5];
                        return [4 /*yield*/, chakram[method]("http://127.0.0.1:" + port + "/" + route, dataOrCallback).then(dataOrRequestOptionsOrCallback)];
                    case 4:
                        r = _a.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        if (!(args === 6)) return [3 /*break*/, 7];
                        return [4 /*yield*/, chakram[method]("http://127.0.0.1:" + port + "/" + route, dataOrCallback, dataOrRequestOptionsOrCallback).then(maybeCallback)];
                    case 6:
                        r = _a.sent();
                        return [3 /*break*/, 8];
                    case 7: throw new Error("No assertion has been performed");
                    case 8:
                        if (unhandledRejection) {
                            e = new Error("There was an unhandled rejection while processing the request");
                            e.stack += "\nCaused by: " + unhandledRejection.stack;
                            throw e;
                        }
                        return [2 /*return*/, r];
                    case 9:
                        process.removeListener("unhandledRejection", captureRejection);
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        }); });
    });
}
exports.assertRequest = assertRequest;
//# sourceMappingURL=test-utils.js.map