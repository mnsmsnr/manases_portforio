import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../style/styles.module.css'
import { Spring, animated } from 'react-spring'
import { FaAngleDoubleDown } from "react-icons/fa"

const useStyles = makeStyles(() => ({
    contentHeight: {
        marginTop: '100vh',
    },
  }));

export const ParallaxSticky = () => {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    const classes = useStyles();
    const year = {1:'1986~',
                2:'1999~',
                3:'2004~',
                4:'2007',
                5_7:'2008~',
                8_10:'2013~',
                11:'2015',
                12_13:'2018~',
                14:'2019~',
                16.5:'2022',
            }
    const main = {1:'北海道の田舎町に出生',
                2:'学生時代',
                3:'陸上自衛隊へ入隊',
                4:'起業断念',
                5:'店頭販売業へ転職',
                6:'窓口接客業へ転職',
                7:'不動産営業へ転職',
                8:'サポートセンター業へ転職',
                9_10:'店頭販売業へ転職',
                11:'海外渡航断念',
                12_13:'店頭販売業へ復職',
                14:'SES企業へ転職',
                16.5:'WEB系受託開発企業へ転職',
            }
    const sub = {1:'大きな事件もなく幼少期を過ごす',
            2:'家庭の事情で大学は進学不可だったため、社会勉強と思い週6日ひたすらバイトに明け暮れる。',
            3:'起業家に憧れ開業資金を貯めようと決意。心身も鍛えられて一石二鳥と考え自衛隊を選択。',
            4:'家庭事情により貯めた資金が無くなり計画が頓挫。\n' +
                '一度、内省して自身のスキルアップを考え始める。',
            5_7:'【コミュニケーションスキルアップ】を目標に上京。\n' +
                '販売〜接客〜営業と徐々にランクアップを経験し、確かな自信を手に北海道へと戻る。',
            8_9:'北海道へ戻り、【ビジネスチャンスを探すための海外生活】を次の目標とし、' +
                '語学留学+ワーキングホリデーの計3年半を計画し渡航資金を準備し始める。',
            10:'販売の傍、書類フォーマットの見直しやシステム化に努めるうち、' +
                '業務改善の面白さと影響力を実感する。\n' +
                'また、関連業務も自然と任されマネージメントも経験。',
            11:'渡航直前に家族の体調悪化、長期の看護でビザの期限が切れ渡航断念。\n' +
                '現在は回復したが、この時の医学知識の学習経験から専門職への敷居の低さを感じ始める。',
            12:'経験のある販売業界へ復職。\n' +
                '販売の傍、再び業務改善とシステム化に努め、自己の適正を認識する。',
            13:'独学でプログラミング(Java)を学習開始 \n' +
                '趣味の一つとして軽い気持ちで初めたが、特に挫折もなく基礎学習を楽しんでいた。',
            14:'IT業界への年齢的な転職リミットを知り、挑戦を決意。',
            15.0:'A社 【PJアサイン前作業】',
            15.01:'[VBA][-][-]\n' +
                '人材確保のための先行オファーとして、配属PJ決定前に現場入り。' +
                '別PJの開発で仕様するVBAツール開発や社内インフォデータ分析を担当。',
            15.2:'A社 【車載システムの組み込み系新規開発PJ】',
            15.21:'[C][新規開発][レガシー環境]\n' +
                '担当機能の設計〜実装〜テストまで一貫して担当。' +
                'ITスキルというよりは、PJ管理やチーム開発の基本を学ぶ。',
            15.4:'B社 【個人番号管理システムのエンハンス開発PJ】',
            15.41:'[Java][拡張開発][モダン環境]\n' +
                'マイクロサービス設計・アジャイル体制・CICD環境等、モダン環境での開発を経験する。',
            15.6:'C社 【法人向け会計ソフトの保守開発PJ】',
            15.61:'[C#][保守開発][レガシー環境]\n' +
                '不具合調査〜修正パッチリリースまで一貫対応。会計知識が必要な高難度の仕様・要件を経験。',
            15.8:'C社 【ECサイト受注センター管理システムの保守開発PJ】',
            15.81:'[Java][保守開発][レガシー環境]\n' +
                '3拠点に渡るニアショア環境のPJで約6ヶ月の大型保守改修に携わる。' +
                '技術的にはレガシーながら、人材確保と顧客関係性が安定した環境を経験する。',
            16.5:'',
            16.51:'\n' +
                '',
            16.7:'',
            16.71:'\n' +
                '',
            16.9:'',
            16.91:'\n' +
                '' +
                '',
        }
    const subEX = {1:'8歳で水田への落下と、9歳で車に正面から轢かれた以外は',
            3:'※身体検査時、体重が下限ギリギリだったため直前に水をガブ飲みしてクリア',
            8_9:'FF14に没頭して引きこもり徹底貯金',
            14:'転職活動は難航を覚悟していたが思いの外あっさりと決まる。',
            15.4:'開発中は余裕無く、技術の知識補完は後の自己学習。',
            15.6:'緊急事態宣言とほぼ同時に長期出張というカオス出向',
        }

    return(
        <>
            <div className={styles.StickyBackground}>
                <Parallax pages={17.5}>
                    <ParallaxLayer offset={0} speed={0.5} className={styles.scrollText}>
                        <Spring
                                loop={true}
                                to={[
                                    { opacity: 1, color: '#26FFE6' },
                                    { opacity: 0, color: '#26FFE6' },
                                ]}
                                from={{ opacity: 0, color: '#26FFE6' }}>
                            {styles => (
                                <animated.div style={styles}>
                                    <FaAngleDoubleDown />
                                </animated.div>
                            )}
                        </Spring>
                    </ParallaxLayer>

                    {/* イメージ画像 */}
                    <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <div className={`${styles.card} ${styles.imageContainer} ${styles.image_hokkaido}`}></div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 3, end: 3 }} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <div className={`${styles.card} ${styles.imageContainer} ${styles.image_selfDefenceForces}`}></div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 4, end: 4 }} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <div className={`${styles.card} ${styles.imageContainer} ${styles.image_entrepreneurshipFailure}`}></div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 5, end: 7 }} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <div className={`${styles.card} ${styles.imageContainer} ${styles.image_Communication}`}></div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 8, end: 10 }} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <div className={`${styles.card} ${styles.imageContainer} ${styles.image_overseas}`}></div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 11, end: 11 }} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <div className={`${styles.card} ${styles.imageContainer} ${styles.image_overseasFailure}`}></div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 12, end: 13 }} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <div className={`${styles.card} ${styles.imageContainer} ${styles.image_programing}`}></div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 14, end: 15.5 }} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <div className={`${styles.card} ${styles.imageContainer} ${styles.image_IT}`}></div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 16.5, end: 17.5 }} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <div className={`${styles.card} ${styles.imageContainer} ${styles.image_next}`}></div>
                    </ParallaxLayer>

                    {/* 年 */}
                    <ParallaxLayer sticky={{ start: 1, end: 1 }} 
                            style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.year}`}>{year[1]}</div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 2, end: 2 }} 
                            style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.year}`}>{year[2]}</div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 3, end: 3 }} 
                            style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.year}`}>{year[3]}</div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 4, end: 4 }} 
                            style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.year}`}>{year[4]}</div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 5, end: 7 }} 
                            style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.year}`}>{year[5_7]}</div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 8, end: 10 }} 
                            style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.year}`}>{year[8_10]}</div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 11, end: 11 }} 
                            style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.year}`}>{year[11]}</div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 12, end: 13 }} 
                            style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.year}`}>{year[12_13]}</div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 14, end: 15.5 }} 
                            style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.year}`}>{year[14]}</div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 16.5, end: 17.5 }} 
                            style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.year}`}>{year[16.5]}</div>
                    </ParallaxLayer>

                    {/* メイン */}
                    <ParallaxLayer sticky={{ start: 1, end: 1 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain}`}>
                            {main[1]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 2, end: 2 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain}`}>
                            {main[2]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 3, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain}`}>
                            {main[3]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 4, end: 4 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain} ${styles.red}`}>
                            {main[4]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 5, end: 5 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain}`}>
                            {main[5]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 6, end: 6 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain}`}>
                            {main[6]}
                        </div>
                    </ParallaxLayer>                    
                    <ParallaxLayer sticky={{ start: 7, end: 7 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain}`}>
                            {main[7]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 8, end: 8 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain}`}>
                            {main[8]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 9, end: 10 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain}`}>
                            {main[9_10]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 11, end: 11 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain} ${styles.red}`}>
                            {main[11]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 12, end: 13 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain}`}>
                            {main[12_13]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 14, end: 15.5 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain} ${styles.blue}`}>
                            {main[14]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 16.5, end: 17.5 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historyMain} ${styles.blue}`}>
                            {main[16.5]}
                        </div>
                    </ParallaxLayer>

                    {/* サブ */}
                    <ParallaxLayer sticky={{ start: 1, end: 1 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub}`}>
                            <span className={styles.lineThrough} >{subEX[1]}</span>{sub[1]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 2, end: 2 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub}`}>
                            {sub[2]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 3, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub}`}>
                            {sub[3]}<span className={styles.lineThrough} >
                                {subEX[3]}
                            </span>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 4, end: 4 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.red}`}>
                            {sub[4]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 5, end: 7 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub}`}>
                            {sub[5_7]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 8, end: 9 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub}`}>
                            {sub[8_9]}<span className={styles.opacity} >{subEX[8_9]}</span>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 10, end: 10 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.blue}`}>
                            {sub[10]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 11, end: 11 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.red}`}>
                            {sub[11]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 12, end: 12 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub}`}>
                            {sub[12]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 13, end: 13 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.blue}`}>
                            {sub[13]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 14, end: 14 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.blue}`}>
                            {sub[14]}<span className={styles.opacity} >{subEX[14]}</span>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 15, end: 15 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.green}`}>
                            <span className={styles.bold} >{sub[15.0]}</span>{sub[15.01]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 15.2, end: 15.2 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.green}`}>
                            <span className={styles.bold} >{sub[15.2]}</span>{sub[15.21]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 15.4, end: 15.4 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.green}`}>
                            <span className={styles.bold} >{sub[15.4]}</span>{sub[15.41]}
                            <span className={styles.opacity} >{subEX[15.4]}</span>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 15.6, end: 15.6 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.green}`}>
                            <span className={styles.bold} >{sub[15.6]}</span>{sub[15.61]}
                            <span className={styles.lineThrough} >{subEX[15.6]}</span>
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 15.8, end: 15.8 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.green}`}>
                            <span className={styles.bold} >{sub[15.8]}</span>{sub[15.81]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 16.5, end: 16.5 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.green}`}>
                            <span className={styles.bold} >{sub[16.5]}</span>{sub[16.51]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 16.7, end: 16.7 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.green}`}>
                            <span className={styles.bold} >{sub[16.7]}</span>{sub[16.71]}
                        </div>
                    </ParallaxLayer>
                    <ParallaxLayer sticky={{ start: 16.9, end: 16.9 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.historySub} ${styles.green}`}>
                            <span className={styles.bold} >{sub[16.9]}</span>{sub[16.91]}
                        </div>
                    </ParallaxLayer>
                </Parallax>
            </div>
            {/* footer表示のため調整 */}
            <div className = {classes.contentHeight}>
            </div>
        </>
    )
}