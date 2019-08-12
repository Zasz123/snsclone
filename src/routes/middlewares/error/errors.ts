import { ErrorNames } from './errorNames';

interface ErrorI {
    description: string;
    code: number;
    message: string;
}

const Errors: { [key in ErrorNames]: ErrorI } = {
    Not_Found: {
        description: '낫파운드',
        code: 404,
        message: '못찾는다고'
    },
    Unhandled_Error: {
        description:  '모름',
        code: 520,
        message: '모르는에러임;;'
    },
    Not_User: {
        description: '유저아님',
        code: 412,
        message: '아이디랑 비번 확인 ㄱ'
    },
    Wrong_Request: {
        description: '잘못된 요청이나 토큰',
        code: 401,
        message: '잘못된 요청'
    },
    Database_Error: {
        description: '데이터베이스 에러',
        code: 520,
        message: '디비에러'
    }
}

export default Errors;