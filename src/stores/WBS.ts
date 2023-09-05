export type tWBS = {
    project: string,
    deliverables: Deliverable[],
}
export type Deliverable = {
    deliverable: string,
    sub_deliverables: SubDeliverable[],
}
export type SubDeliverable = {
    sub_deliverable: string,
    lowest_sub_deliverables: LowestSubDeliverable[],
}
export type LowestSubDeliverable = {
    lowest_sub_deliverable: string,
    cost_accounts: CostAccount[],
}
export type CostAccount = {
    cost_account: string,
    work_packages: WorkPackage[],
}
export type WorkPackage = {
    work_package: string,
}
