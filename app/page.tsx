import css from './page.module.css';
import PhotoCarousel from '@/components/carousel/carousel';

export default function Home() {
  return (
    <main className={css.main}>
      <section className={css.hero}>
        <div className={css.heroText}>
          <div className={css.badgeBox}>
            <p className={css.text}>Інклюзивний mobile-додаток:</p>
            <div className={css.actions}>
              <a
                className={css.primaryButton}
                // href='https://play.google.com/apps/internaltest/4701702126940081656'
              >
                Android ✅
              </a>
              {/* <a className={css.secondaryButton} href=''>
                iOS ✅
              </a> */}
            </div>
          </div>

          <h1 className={css.mainTitle}>inkluvo — мапа доступності закладів</h1>

          <p className={css.text}>
            inkluvo допомагає знаходити та позначати доступність громадських
            місць на мапі: входи, пандуси, ліфти, вбиральні, паркування, кнопки
            виклику та інші важливі умови.
          </p>

          <p className={css.text}>
            Мета проєкту — зробити пересування містом більш передбачуваним для
            людей, яким важливо заздалегідь знати, чи зручно потрапити до
            певного місця.
          </p>

          <div className={css.actions}>
            <a href='#testing' className={css.primaryButton}>
              Стати тестувальником
            </a>

            <a href='#features' className={css.secondaryButton}>
              Дізнатися більше
            </a>
          </div>
        </div>

        <div className={css.heroCard}>
          <span className={css.cardNumber}>14 днів</span>
          <p className={css.cardText}>
            Потрібно 12 тестувальників для закритого тестування Android-версії
            перед публікацією в Google Play.
          </p>
          <p className={css.cardText}>
            <span className={css.warning}>Увага</span>: коли будете створювати
            заклад якого не існує, просто для тесту, вказуйте в назві закладу
            ''видалити''
          </p>
        </div>
      </section>

      <section className={css.section}>
        <div className={css.sectionHeader}>
          <p className={css.title}>Як виглядає додаток</p>

          <p className={css.text}>
            Основні екрани inkluvo: мапа, додавання закладу, оцінка доступності,
            збережені місця та профіль користувача.
          </p>
        </div>

        <PhotoCarousel />
      </section>

      <section className={css.section} id='features'>
        <p className={css.title}>Що можна робити в inkluvo</p>

        <div className={css.features}>
          <article className={css.featureCard}>
            <h2 className={css.featureTitle}>Переглядати місця на мапі</h2>
            <p className={css.text}>
              Користувач бачить заклади поблизу та може швидко зрозуміти рівень
              їхньої доступності.
            </p>
          </article>

          <article className={css.featureCard}>
            <h2 className={css.featureTitle}>Додавати нові заклади</h2>
            <p className={css.text}>
              Якщо місця ще немає в базі, його можна додати вручну та заповнити
              основну інформацію.
            </p>
          </article>

          <article className={css.featureCard}>
            <h2 className={css.featureTitle}>Оцінювати доступність</h2>
            <p className={css.text}>
              У додатку можна вказати наявність пандуса, ліфта, доступної
              вбиральні, широких дверей та інших умов.
            </p>
          </article>

          <article className={css.featureCard}>
            <h2 className={css.featureTitle}>Додавати фото</h2>
            <p className={css.text}>
              Фото допомагають іншим користувачам краще зрозуміти, як виглядає
              вхід, пандус або простір біля закладу.
            </p>
          </article>
        </div>
      </section>

      <section className={css.section}>
        <div className={css.infoBlock}>
          <p className={css.title}>Навіщо це потрібно</p>

          <p className={css.text}>
            Часто інформацію про доступність закладу складно знайти заздалегідь.
            Через це людина може приїхати на місце й лише там дізнатися, що
            вхід, сходи, двері або вбиральня не підходять.
          </p>

          <p className={css.text}>
            inkluvo має допомогти зібрати таку інформацію в одному місці та
            зробити її доступною для всіх користувачів.
          </p>
        </div>
      </section>

      <section className={css.testing} id='testing'>
        <div>
          <h2 className={css.title}>Допоможіть протестувати додаток</h2>

          <p className={` ${css.subtitle} ${css.text}`}>
            Щоб взяти участь у закритому тестуванні, потрібно лише кілька
            хвилин:
          </p>
          <p className={`${css.text} ${css.indent}`}>
            <span className={css.explain}>- Залиште Gmail-адресу</span>, яка
            використовується у вашому Google Play.
          </p>
          <p className={`${css.text} ${css.indent}`}>
            <span className={css.explain}>
              - Я додаю цей акаунт до списку тестувальників
            </span>{' '}
            у Google Play Console.
          </p>
          <p className={`${css.text} ${css.indent}`}>
            <span className={css.explain}>
              - На вказану Gmail-адресу ви отримаєте посилання
            </span>
            для приєднання до закритого тестування.
          </p>
          <p className={`${css.text} ${css.indent}`}>
            <span className={css.explain}>
              - Перейдіть за цим посиланням та встановіть Inkluvo через Google
              Play.
            </span>
          </p>
          <p className={`${css.text} ${css.indent}`}>
            <span className={css.explain}>- Користуйтеся застосунком</span> у
            звичайному режимі та, за можливості, повідомте про помилки,
            незручності або свої враження.
          </p>
          <p className={css.text}>
            <span className={css.explain}>
              💙 Ваш відгук допоможе зробити Inkluvo кращим і підготувати його
              до публічного запуску.
            </span>
          </p>
        </div>

        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSd7PokeUBtLd7NzjG0COY0sFj9p6UIpXKYd8Yo5f4nGqShoxw/viewform?usp=publish-editor'
          target='_blank'
          rel='noreferrer'
          className={css.primaryButton}
        >
          Заповнити форму
        </a>
      </section>
    </main>
  );
}
