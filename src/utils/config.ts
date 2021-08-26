interface Status {
  Todo: string;
  InProgress: string;
  Done: string;
}

interface FilterOption {
  createDate: string;
  creator: string;
}

export const STATUS: Status = {
  Todo: '할 일',
  InProgress: '진행 중',
  Done: '완료',
};

export const filter: FilterOption = {
  createDate: '생성일',
  creator: '생성자',
};

export const CREATOR_NAME = ['남주', '택훈', '진수', '삭'];
