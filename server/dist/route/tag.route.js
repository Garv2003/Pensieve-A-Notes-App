"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagRouter = void 0;
var express_1 = __importDefault(require("express"));
var tag_controller_1 = require("../controller/tag.controller");
var router = express_1.default.Router();
exports.tagRouter = router;
router.get('/tags/user/:userId', tag_controller_1.GetUserTags);
router.delete('/tag/:id', tag_controller_1.DeleteTag);
//# sourceMappingURL=tag.route.js.map