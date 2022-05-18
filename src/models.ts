export interface MockClass {
    mockClassName: string,
    mockClassId: number,
    mockSubClassCollection: MockSubClass[],
}

export interface MockSubClass {
    mockSubClassName: string,
    mockSubClassId: number,
    mockOptionCollection: MockOption[],
}

export interface MockOption {
    mockOptionName: string,
    mockOptionId: number,
}