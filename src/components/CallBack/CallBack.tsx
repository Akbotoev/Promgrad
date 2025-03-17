"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Styles.module.scss";
import axios from "axios";
import { useState } from "react";

interface TypesInputs {
  name: string;
  phone: string;
  address: string;
  message: string;
  agree: boolean;
}

export const CallBack = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TypesInputs>();

  const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

  const messageModel = (data: TypesInputs) => {
    return (
      `ФИО/Имя компании: <b>${data.name}</b>\n` +
      `Номер телефона*: <b>${data.phone}</b>\n` +
      `Эл. адрес: <b>${data.address}</b>\n` +
      `Сообщение: <b>${data.message}</b>\n` +
      `Согласие с политикой конфиденциальности : <b>${
        data.agree ? "✅ Да" : "❌ Нет"
      }</b>`
    );
  };

  const onSubmit: SubmitHandler<TypesInputs> = async (data) => {
    try {
      await axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageModel(data),
      });
      reset();
      setIsSuccess(true);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setIsSuccess(false);
    }
  };

  return (
    <div className={styles.CallBack}>
      <div id="formik" className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Cвязаться с нами</h2>
          <div className={styles.send_message}>
            <h1 className={styles.title_send_message}>
              Оставьте заявку – спроектируем{" "}
              <span>вашу идею в реальность!</span>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.inputs}>
              {/* Имя */}
              <input
                placeholder="ФИО/Имя компании"
                className={styles.input}
                type="text"
                style={{
                  borderBottom: errors.name
                    ? "1px solid #D32F2F"
                    : " 1px solid #0d3b5c",
                }}
                {...register("name", {
                  required: "Поле обязательно для заполнения",
                })}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}

              {/* Телефон */}
              <input
                className={styles.input}
                type="tel"
                placeholder="Номер телефона*"
                style={{
                  borderBottom: errors.phone
                    ? "1px solid #D32F2F"
                    : " 1px solid #0d3b5c",
                }}
                {...register("phone", {
                  required: "Поле обязательно для заполнения",
                })}
              />
              {errors.phone && (
                <p className={styles.error}>{errors.phone.message}</p>
              )}

              {/* Эл. адрес */}
              <input
                placeholder="Эл. адрес"
                className={styles.input}
                type="email"
                style={{
                  borderBottom: errors.address
                    ? "1px solid #D32F2F"
                    : " 1px solid #0d3b5c",
                }}
                {...register("address", {
                  required: "Поле обязательно для заполнения",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Неверный формат электронного адреса",
                  },
                })}
              />
              {errors.address && (
                <p className={styles.error}>{errors.address.message}</p>
              )}

              {/* Сообщение */}
              <textarea
                placeholder="Сообщение"
                className={styles.textarea}
                style={{
                  borderBottom: errors.message
                    ? "1px solid #D32F2F"
                    : " 1px solid #0d3b5c",
                }}
                {...register("message", {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                    value: 5,
                    message: "Сообщение должно содержать минимум 5 символов",
                  },
                })}
              ></textarea>
              {errors.message && (
                <p className={styles.error}>{errors.message.message}</p>
              )}

              {/* Чекбокс */}
              <label className={styles.label_checkbox}>
                <input
                  {...register("agree")}
                  required
                  type="checkbox"
                  className={styles.checkbox}
                />
                <span className={styles.customCheckbox}></span>
                <h4>Согласен с условиями политики конфиденциальности</h4>
              </label>

              {/* Кнопка */}
              <button
                style={{
                  background: isSuccess ? "#0a3d62" : "transparent",
                  color: isSuccess ? "white" : "#0A3D62",
                }}
                type="submit"
                className={styles.button}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Отправка..."
                  : isSuccess
                  ? "Отправлено"
                  : "Отправить"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
