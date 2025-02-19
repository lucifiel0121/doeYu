import Link from "next/link";
import style from './footer.module.css'

export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.logoContainer}>
                <Link href="/">
                    <a className={style.navBarIcon}>
                        <svg width="51" height="98" viewBox="0 0 51 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.2728 0.140802C37.8158 -0.0896179 37.2988 -0.022459 36.7652 0.234967C33.3383 1.88805 30.9266 5.29721 27.3996 6.71997C24.3272 7.95934 22.1591 11.0957 20.8954 13.7323C20.0161 15.5669 20.2952 18.0372 18.8076 19.4161C18.503 19.6985 18.1119 19.8783 17.6138 19.8783C15.4391 19.8783 4.566 38.5192 2.39137 45.0984C0.216746 51.6775 1.30408 48.3879 0.216767 57.1601C0.00302116 58.8846 -0.0400248 60.3795 0.0327771 61.6644C0.292931 66.256 3.25296 70.4424 4.85424 74.7486L5.65334 76.8976C6.01577 77.6286 7.82796 79.7486 12.1772 82.3802C14.1025 83.5452 15.8148 85.0397 17.2197 86.5022C19.9042 89.2968 19.9692 95.9547 23.4326 97.6691C26.0205 98.9502 27.0926 96.2936 26.5692 93.4346C26.5018 93.0662 26.417 92.6713 26.3123 92.249C25.6027 89.3865 26.2921 85.3564 26.9637 82.7781C27.2251 81.7744 27.6294 80.813 28.1008 79.8906C34.2347 67.8882 38.3122 64.7563 39.3601 62.6428C39.7896 61.7764 39.9102 57.1057 40.0936 56.1549C40.3078 55.0447 40.4474 53.5828 40.4474 51.6775C40.4474 48.4636 41.0431 45.1095 41.7668 42.2755C42.7342 38.4878 41.5695 33.0132 44.7966 30.8435C46.2424 29.8715 47.5324 27.5083 48.5188 25.0966C49.8093 21.9411 48.4849 18.5451 46.9713 15.4922C46.1014 13.7377 48.7835 9.64403 50.2332 7.81649C50.9581 7.08547 51.3205 5.40413 46.9713 4.5269C41.5347 3.43037 40.4474 1.23733 38.2728 0.140802Z" fill="#FEFEFE" />
                        </svg>
                        <div className={style.wordArts}>
                            <div className={style.taiwan}>taiwan</div>
                            <div className={style.iconTitle}>島遊</div>
                        </div>
                    </a>
                </Link>
            </div>

            <div className={style.listContainer}>
                <div className={style.footerList}>
                    <ul>
                        <a href="/#"><li>
                            關於 Taiwan 台灣
                        </li></a>
                        <a href="/#"><li>
                            我們是誰
                        </li></a>
                        <a href="/#"><li>
                            加入我們
                        </li></a>
                        <a href="/#"><li>
                            聯繫我們
                        </li></a>
                    </ul>
                </div>

                <div className={style.footerList}>
                    <ul>
                        <a href="/#"><li>
                            服務條款
                        </li></a>
                        <a href="/#"><li>
                            隱私權政策
                        </li></a>
                        <a href="/#"><li>
                            ＦＡＱ
                        </li></a>
                    </ul>
                </div>

                <div className={style.footerList}>
                    <ul>
                        <a><li>
                            追蹤我們
                        </li></a>
                        <a href="/#"><li>
                            Facebook
                        </li></a>
                        <a href="/#"><li>
                            Instgram
                        </li></a>
                        <a href="/#"><li>
                            Line
                        </li></a>
                    </ul>
                </div>
            </div>

        </div>
    )
}