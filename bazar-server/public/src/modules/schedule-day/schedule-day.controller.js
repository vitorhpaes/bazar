"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleDayController = void 0;
const common_1 = require("@nestjs/common");
const isPublic_decorator_1 = require("../../decorators/isPublic.decorator");
const parse_date_pipe_1 = require("../../helpers/pipes/parse-date-pipe");
const schedule_day_service_1 = require("./schedule-day.service");
const slot_service_1 = require("../slot/slot.service");
const create_schedule_day_dto_1 = require("./dto/create-schedule-day.dto");
let ScheduleDayController = class ScheduleDayController {
    constructor(scheduleDayService, slotsService) {
        this.scheduleDayService = scheduleDayService;
        this.slotsService = slotsService;
    }
    create(scheduleDayDTO) {
        return this.scheduleDayService.create(scheduleDayDTO);
    }
    getScheduleAvailableDays() {
        return this.scheduleDayService.getScheduleAvailableDays();
    }
    getAvailableSlots(date) {
        return this.slotsService.getAvailableSlots(date);
    }
};
exports.ScheduleDayController = ScheduleDayController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_schedule_day_dto_1.CreateScheduleDayDto]),
    __metadata("design:returntype", void 0)
], ScheduleDayController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/available'),
    (0, isPublic_decorator_1.IsPublic)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScheduleDayController.prototype, "getScheduleAvailableDays", null);
__decorate([
    (0, common_1.Get)('/:date/slots/available'),
    (0, isPublic_decorator_1.IsPublic)(),
    __param(0, (0, common_1.Param)('date', parse_date_pipe_1.ParseDatePipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", void 0)
], ScheduleDayController.prototype, "getAvailableSlots", null);
exports.ScheduleDayController = ScheduleDayController = __decorate([
    (0, common_1.Controller)('schedule-day'),
    __metadata("design:paramtypes", [schedule_day_service_1.ScheduleDayService,
        slot_service_1.SlotService])
], ScheduleDayController);
//# sourceMappingURL=schedule-day.controller.js.map