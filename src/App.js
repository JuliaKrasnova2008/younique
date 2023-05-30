import './App.css';
import logo from './images/logo.svg'
import girlMeditate from './images/girlMeditate.png'
import diamond from './images/diamond.svg'
import line from './images/line.svg'
import doubts from './images/doubts.svg'
import women from './images/woman.png'
import liventcova from './images/liventcova.png'
import hubner from './images/hubner.png'
import luchkina from './images/luchkina.png'
import zyuzina from './images/zyuzina.png'
import golubeva from './images/golubeva.png'
import lapidys from './images/lapidys.png'
import anastasia from './images/anastasia.png'
import radchenko from './images/radchenko.png'
import stars from './images/stars.svg'
import feedbackFoto from './images/feedbackFoto.png'
import advantagesStars from './images/advantagesStars.svg'
import subscriptionStars from './images/subscriptionStars.svg'
import vector from './images/vector.svg'
import backgroundJoin from './images/backgroundJoin.png'
import backgroundBalance from './images/backgroundBalance.png'
import backgroundSubscription from './images/backgroundSubscription.png'
import backgroundFooter from './images/backgroundFooter.png'

function App() {
  return (
    <div className="App">

      <header className='header'>
        <img className='header__main-img'
          alt='Девушка медитирует'
          src={girlMeditate}
        />
        <img className='header__logo'
          alt='Ты уникальная'
          src={logo}
        />
        <button className='header__button sign-in' type='submit'>Вступить в клуб</button>

      </header>

      <main className='content'>
        <section className='lead'>
          <h1 className='title'>Клуб девушек, где каждая <br></br>
            стремится к гармонии с собой</h1>
          <p className='subtitle'>Бесценный опыт и уникальные знания топовых экспертов в одной подписке</p>
          <button className='lead__button sign-in' type='submit'>Вступить в клуб</button>

          <div className='problems'>
            <h2 className='title title_problems'>знакомы эти сомнения? </h2>
            <img className='problems__img'
              alt='Сомнения'
              src={doubts}
            />
          </div>

          <div className='join'>
            <img className='join__gradient'
              src={backgroundJoin}
            />
            <img className='join__img'
              alt='Алмаз'
              src={diamond}
            />
            <h2 className='title_dark title_dark_join'>Вступи в клуб «Ты Уникальная» </h2>
            <p className='subtitle_dark subtitle_dark_join'>В одном месте собран многолетний опыт экспертов, который поможет решить ваши проблемы путем развития и поиска баланса жизненных энергий</p>
          </div>

          <div className='advantages'>
            <h2 className='title title_advantages'>Преимущества участия в клубе </h2>
            <img
              className='advantages__img'
              src={advantagesStars}
              alt='Звезды'
            />
            <ul className='advantages__lists'>

              <li className='advantages__item'>
                <h3 className='advantages__title'>Экономия времени</h3>
                <p className='subtitle subtitle_advantages'>Больше не надо искать фитнес-тренера, коуча и психолога самостоятельно. По каждой энергии мы выбираем лучших специалистов и готовы познакомить вас с ними. Мы регулярно проводим ротацию экспертов</p>
                <img
                  className='img__line'
                  src={line}
                  alt='Линия'
                />
              </li>

              <li className='advantages__item'>
                <h3 className='advantages__title'>Экономия денег</h3>
                <p className='subtitle subtitle_advantages'>Один вебинар у эксперта может стоить несколько тысяч рублей. Мы предлагаем вам видео, подкасты и живые эфиры по подписке от 500 рублей в месяц</p>
                <img
                  className='img__line'
                  src={line}
                  alt='Линия'
                />
              </li>

              <li className='advantages__item'>
                <h3 className='advantages__title'>Удобство</h3>
                <p className='subtitle subtitle_advantages'>Все материалы доступны на одной платформе. Вы можете учиться в фоновом режиме: слушайте подкасты за рулем, смотрите видео, пока готовите завтрак</p>
                <img
                  className='img__line'
                  src={line}
                  alt='Линия'
                />
              </li>

              <li className='advantages__item'>
                <h3 className='advantages__title'>Топовые эксперты</h3>
                <p className='subtitle subtitle_advantages'>Каждый специалист, с которым мы сотрудничаем, прошел тщательный отбор. В нашей команде только эксперты с многолетним опытом работы и доказанными результатами</p>
                <img
                  className='img__line'
                  src={line}
                  alt='Линия'
                />
              </li>

              <li className='advantages__item'>
                <h3 className='advantages__title'>Непрерывное саморазвитие</h3>
                <p className='subtitle subtitle_advantages'>Вы становитесь еще более образованным, глубоким и разносторонним человеком. Каждый день
                </p>
              </li>
            </ul>
          </div>

          <div className='balance'>
            <img className='balance__gradient'
              src={backgroundBalance}
            />
            <img className='balance__vector'
              alt='Вектор'
              src={vector}
            />
            <h2 className='title title_balance'>Баланс восьми энергий для счастливой жизни</h2>
            <div className='balance__img'>
              <img className='balance__img-women'
                alt='Энергии'
                src={women}
              />
            </div>

          </div>

        </section>

        <section className='experts'>
          <h2 className='title title_experts'>Эксперты</h2>
          <img
            className='img__line'
            src={line}
            alt='Линия'
          />
          <p className='subtitle subtitle_experts'>Мы собрали в одном клубе экспертов, готовых помочь каждой девушке, стремящейся к саморазвитию, встать на правильный путь и не сойти с него</p>

          <ul className='experts__list'>
            <li className='experts__item'>
              <img
                className='experts__foto'
                src={liventcova}
                alt='Юлия Ливинцова'
              />
              <span className='experts__energy'>Физическая энергия</span>
              <h4 className='experts__name'>Юлия Ливинцова</h4>
              <p className='experts__education'>Тренер клуба «Gymatica fitness», организатор групповых фитнес-туров по России</p>
              <p className='experts__about'>Поможет прийти к красивому, рельефному телу, повысить уровень энергии и улучшить самочувствие. Научит тренироваться дома так же эффективно, как в спортзале, но без дорогого оборудования и больших весов. Сэкономит время на дорогу до тренажерки, найдет мотивацию на занятия спортом.</p>
            </li>

            <li className='experts__item'>
              <img
                className='experts__foto'
                src={golubeva}
                alt='Анастасия Голубева'
              />
              <span className='experts__energy'>Энергия воли и поступков</span>
              <h4 className='experts__name'>Анастасия Голубева</h4>
              <p className='experts__education'>Женский коуч, практикующий психолог и НЛП-практик</p>
              <p className='experts__about'>Научит правильно ставить цели, не гнаться за чужими желаниями и не пытаться соревноваться с мужчинами. Расскажет, как работать с намерениями легко, по-женски, без выгорания. Поможет разобраться с ограничивающими установками и блоками, которые мешают добиваться желаемого.</p>
            </li>

            <li className='experts__item'>
              <img
                className='experts__foto'
                src={hubner}
                alt='Анастасия Гюбнер'
              />
              <span className='experts__energy'>Энергия разума</span>
              <h4 className='experts__name'>Анастасия Гюбнер</h4>
              <p className='experts__education'>Психолог-нутрициолог, специалист по генетическим исследованиям лаборатории ВGG. Спикер таких проектов, как: АСИЗ, Edpro, МИИН, Psy 2.0</p>
              <p className='experts__about'>Покажет ваши эмоции со стороны и научит справляться с ними с помощью рассудка, а не заедать стресс шоколадками. Объяснит, как наладить свой рацион и сон, какие привычки повысят уровень энергии и мотивации, а также поможет справиться с прокрастинацией и неумением доводить начатое до конца.</p>
            </li>

            <li className='experts__item'>
              <img
                className='experts__foto'
                src={lapidys}
                alt='Анна Лапидус'
              />
              <span className='experts__energy'>Энергия духа</span>
              <h4 className='experts__name'>Анна Лапидус</h4>
              <p className='experts__education'>Тренер по голосу и речи. Ведущая тренингов по ораторскому искусству в женской академии «Минерва». Ведущая городских концертов и мероприятий в Санкт-Петербурге</p>
              <p className='experts__about'>Раскроет все секреты ораторского искусства, научит с помощью красивой и уверенной речи добиваться нужного эффекта у публики, уважения и внимания со стороны коллектива. Снимет зажимы на лице, скорректирует интонацию, расскажет о языке тела. Поделится техниками самопрезентации.</p>
            </li>

            <li className='experts__item'>
              <img
                className='experts__foto'
                src={luchkina}
                alt='Россияна Лучкина'
              />
              <span className='experts__energy'>Сексуальная энергия</span>
              <h4 className='experts__name'>Россияна Лучкина</h4>
              <p className='experts__education'>Сексолог-психолог, ведущий в центре сексуального образования Secrets. Тренер и преподаватель PSY2.0</p>
              <p className='experts__about'>Объяснит, как провести диагностику своей сексуальности и понять, что блокирует сексуальную энергию. Научит получать удовольствие от жизни, раскрепощаться и снимать напряжение. Расскажет о причинах пониженного либидо и способах его повысить, пробудить контакт с внутренней сексуальностью.</p>
            </li>

            <li className='experts__item'>
              <img
                className='experts__foto'
                src={anastasia}
                alt='Анастасия'
              />
              <span className='experts__energy'>Энергия души</span>
              <h4 className='experts__name'>Анастасия</h4>
              <p className='experts__education'>Основатель собственной йога-студии, инструктор по йоге и гвоздестоянию, ведущая женских кругов</p>
              <p className='experts__about'>Поделится разными видами медитаций и дыхательных практик. Расскажет, как копить и сбрасывать энергию, восстанавливать внутренние ресурсы. Научит завершать дела, которые истощают организм. Поможет разобраться с намерениями, правильно рефлексировать и благодарить себя и мир.</p>
            </li>

            <li className='experts__item'>
              <img
                className='experts__foto'
                src={zyuzina}
                alt='Анастасия Зюзина'
              />
              <span className='experts__energy'>Энергия творчества</span>
              <h4 className='experts__name'>Анастасия Зюзина</h4>
              <p className='experts__education'>Специалист по нейрографике, организатор женских встреч в Москве и ведущая оффлайн-тренингов для корпораций
              </p>
              <p className='experts__about'>Расслабит и погрузит в творческий процесс, научит выгружать тревожные мысли, слышать себя в процессе рисования, привлекать удачу в жизнь. Объяснит, какие значения имеют разные цвета, как проявляться и достигать желаемого. Покажет, как развивать новые нейронные связи, которые помогут в достижении результатов.</p>
            </li>

            <li className='experts__item'>
              <img
                className='experts__foto'
                src={radchenko}
                alt='Екатерина Радченко'
              />
              <span className='experts__energy'>Энергия создателя</span>
              <h4 className='experts__name'>Екатерина Радченко</h4>
              <p className='experts__education'>Практикующий западный астролог, эксперт и автор статей для телеканала “Ю”</p>
              <p className='experts__about'>Будет каждый день/неделю/месяц составлять новый астропрогноз, что поможет избежать спонтанных и необдуманных поступков. Расскажет, когда лучше делать стрижку, маникюр или косметологические процедуры. Научит строить натальную карту. Поможет понять, какие девушки привлекают мужчин.</p>
            </li>
          </ul>

          <div className='vip-chat'>
            <img
              className='vip-chat__foto'
              src={stars}
              alt='Звезды'
            />
            <h4 className='title title_vip-chat'>VIP-чат</h4>
            <p className='subtitle subtitle_vip-chat'>Возможность общения с экспертом</p>
            <span className='vip-chat__span'>Количество мест ограничено</span>
          </div>
        </section>

        <div className='aside'>
          <img
            className='img__line'
            src={line}
            alt='Линия'
          />
          <h2 className='title title_aside'>бесплатный скрининг</h2>
          <p className='subtitle subtitle_aside'>Скрининг поможет понять, с чего лучше начать прогресс и чему уделить внимание в первую очередь.</p>
          <button className='aside__button' type='submit'>Пройти в телеграме</button>
        </div>

        <div className='subscription'>
          <img className='subscription__gradient'
            src={backgroundSubscription}
          />
          <h2 className='title_dark title_dark_subscription'>Одна подписка, чтобы изменить все</h2>
          <img
            className='subscription__img'
            src={subscriptionStars}
            alt='Звезды'
          />
          <ul className='rate__list'>
            <li className='rate__item'>
              <h5 className='title_rate'>
                500
                <span className='rate__span_rub'>₽</span>
                <span className='rate__span'>/мес</span>
              </h5>
              <p className='subtitle_dark subtitle_dark_rate'>Две энергии на выбор</p>
            </li>

            <li className='rate__item'>
              <h5 className='title_rate'>
                850
                <span className='rate__span_rub'>₽</span>
                <span className='rate__span'>/мес</span>
              </h5>
              <p className='subtitle_dark subtitle_dark_rate'>Четыре энергии на выбор</p>
            </li>

            <li className='rate__item'>
              <h5 className='title_rate'>
                1500
                <span className='rate__span_rub'>₽</span>
                <span className='rate__span'>/мес</span>
              </h5>
              <p className='subtitle_dark subtitle_dark_rate'>Восемь энергий</p>
            </li>
          </ul>
          <button className='subscription__button' type='submit'>Оплатить в телеграме</button>
        </div>

        <section className='feedback'>
          <h2 className='title title_feedback'>отзывы</h2>
          <p className='subtitle subtitle_feedback'>Обратная связь тех, кто уже состоит в клубе — главный знак, что система работает.</p>

          <ul className='feedback__list'>
            <li className='feedback__item'>
              <div className='feedback__info'>
                <img
                  className='feedback__foto'
                  src={feedbackFoto}
                  alt='Анастасия'
                />
                <h6 className='feedback__name'>Анастасия, 26 лет</h6>
              </div>
              <p className='feedback__description'>“Я пришла сюда в растерянных чувствах. Ни на что особо не надеялась, но решила что попробовать можно. В первый месяц изменений не было. Спустя три месяца вдруг осознала.</p>
              <p className='feedback__tagline'>Я стала чувствовать себя лучше. Уверенной, сфокусированной, цельной.</p>
              <p className='feedback__description'>Постепенное погружение, обучение тому как настроить себя и свою жизнь — действительно работает. Спасибо.”</p>
            </li>

            <li className='feedback__item'>
              <div className='feedback__info'>
                <img
                  className='feedback__foto'
                  src={feedbackFoto}
                  alt='Анастасия'
                />
                <h6 className='feedback__name'>Анастасия, 26 лет</h6>
              </div>
              <p className='feedback__description'>“Клуб посоветовала подруга. До этого все обучения были очень напряженными, я старалась, много от них ждала и часто уходила разочарованной. Клуб другой. Это похоже на дружбу с профессиналом, который каждый день, по чуть-чуть помогает тебе стать лучше и решить свои проблемы.</p>
              <p className='feedback__tagline'>Никакой драмы, никакого стресса, но очень много пользы.</p>
              <p className='feedback__description'>Большое спасибо команде, которая это сделала. Странно, что никто не придумал такой формат раньше. Я уже привела подруг и приведу еще!”</p>
            </li>

            <li className='feedback__item'>
              <div className='feedback__info'>
                <img
                  className='feedback__foto'
                  src={feedbackFoto}
                  alt='Анастасия'
                />
                <h6 className='feedback__name'>Анастасия, 26 лет</h6>
              </div>
              <p className='feedback__description'>“Я пришла сюда в растерянных чувствах. Ни на что особо не надеялась, но решила что попробовать можно. В первый месяц изменений не было. Спустя три месяца вдруг осознала.</p>
              <p className='feedback__tagline'>Я стала чувствовать себя лучше. Уверенной, сфокусированной, цельной.</p>
              <p className='feedback__description'>Постепенное погружение, обучение тому как настроить себя и свою жизнь — действительно работает. Спасибо.”</p>
            </li>
          </ul>

          <div className="feedback__button">
            <button className='chevron chevron_left' type='submit' />
            <button className='chevron chevron_right' type='submit' />
          </div>
        </section>

        <section className='questions'>
          <h2 className='title title_questions'>Частые вопросы</h2>
          <ul className='questions__list'>
            <li className='questions__item'>
              <div className='questions__block'>
                <p className='questions__text'>Сколько времени необходимо уделять изучению материалов? Уроки будут выходить ежедневно?</p>
                <button className='questions__btn' type='button'></button>
              </div>
              <p className='questions__desc hidden'>Материалы по каждой из энергий будут публиковаться примерно один раз в 2–3 дня, что позволит в комфортном режиме изучать программу сразу по нескольким направлениям</p>
            </li>

            <li className='questions__item'>
              <div className='questions__block'>
                <p className='questions__text'>Будет ли возможность получить обратную связь от экспертов, задать уточняющий вопрос? </p>
                <button className='questions__btn' type='button'></button>
              </div>
              <p className='questions__desc hidden'>Да, вы сможете получить обратную связь от эксперта на прямых эфирах или в рамках вип-чата</p>
            </li>

            <li className='questions__item'>
              <div className='questions__block'>
                <p className='questions__text'>Предусмотрено ли общение с другими участниками клуба?</p>
                <button className='questions__btn' type='button'></button>
              </div>
              <p className='questions__desc hidden'>Да, общение с участниками клуба предусмотрено в рамках подписки на вип-чат</p>
            </li>

            <li className='questions__item'>
              <div className='questions__block'>
                <p className='questions__text'>Насколько компетентны специалисты в своей области? Почему мне стоит им доверять</p>
                <button className='questions__btn' type='button'></button>
              </div>
              <p className='questions__desc hidden'>Все специалисты проходят тщательную проверку нашей командой. У каждого имеется многолетний багаж знаний и опыта</p>
            </li>

            <li className='questions__item'>
              <div className='questions__block'>
                <p className='questions__text'>Я совсем новичок. Пойму ли, о чем идет речь в обучающих материалах?</p>
                <button className='questions__btn' type='button'></button>
              </div>
              <p className='questions__desc hidden'>Программа выстроена таким образом, чтобы каждый участник клуба смог разобраться в материале. Эксперты делятся той областью знаний, которая доступна даже новичкам, при этом материал информативен и применим в бытовой жизни</p>
            </li>

            <li className='questions__item'>
              <div className='questions__block'>
                <p className='questions__text'>Будут ли практические задания?</p>
                <button className='questions__btn' type='button'></button>
              </div>
              <p className='questions__desc hidden'>Да.  Для более глубокой проработки темы эксперты будут давать практические задания</p>
            </li>
          </ul>
        </section>
      </main>

      <footer className='footer'>
        <img className='footer__gradient'
          src={backgroundFooter}
        />
        <p className='slogan'>Баланс восьми энергий для счастливой жизни</p>
        <div className='information'>
          <a className='information__oferta'>Пользовательское соглашение</a>
          <a className='information__oferta'>Оферта</a>
        </div>
        <button className='footer__button' type='submit'>Связаться с нами</button>

      </footer>

    </div>
  );
}

export default App;
