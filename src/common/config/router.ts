export const ROUTER = {
    WELCOME: '/welcome',
    HOME: '/home',
    AUTH: '/auth',
    REGISTRATION: '/registration',
    FORGOT_PASSWORD: '/forgot-password',
    PROJECT: (name?: string) => `/project/${name ? name : ''}`,
    CREATE_PROJECT: '/create-project',
    TASK: '/task',
    INDEX: '/',
    ANY: '*'
}