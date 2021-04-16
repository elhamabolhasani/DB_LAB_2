export default class CreateProjectDto {
    readonly user: number;
    readonly name: string;
    readonly priority: string;
    readonly deedline_days: number;
    price: number;
    requests: number[];
}
