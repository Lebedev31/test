

export const validationRules = {
    userId: {
        required: "User ID обязателен",
        min: {
            value: 1,
            message: "User ID должен быть больше 0"
        }
    },
    id: {
        required: "ID обязателен",
        min: {
            value: 1,
            message: "ID должен быть больше 0"
        }
    },
    title: {
        required: "Заголовок обязателен",
        minLength: {
            value: 3,
            message: "Минимум 3 символа"
        },
        maxLength: {
            value: 100,
            message: "Максимум 100 символов"
        }
    },
    body: {
        required: "Текст поста обязателен",
        minLength: {
            value: 10,
            message: "Минимум 10 символов"
        },
        maxLength: {
            value: 1000,
            message: "Максимум 1000 символов"
        }
    }
};
