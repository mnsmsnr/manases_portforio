import React from 'react';
import { ParallaxSlide } from '../parallax/parallaxSlide';
import PJimage1 from '../images/railstutorial.png'
import PJimage2 from '../images/the_workout.png'
import PJimage3 from '../images/manases_portfolio.png'

export const Product = () => {
    const railsTutorial={PJName:'Rails Tutorial',
                img:PJimage1,
                product:'RubyonRailsチュートリアルで作成したTwitterライクなwebアプリケーションです。',
                development:'【トレンド技術の習得】と【バックエンド技術向上】を目的としました。\n',
                learn:'MVCモデルやCRUD構造等の基本はJavaで理解済でしたが、より高水準言語の開発速度の速さと' +
                        'hash・セッション・Validate・アクティベート等実用技術の基本を学ぶことができました。',
                skills:['Ruby','html','css','JavaScript','RubyonRails','CoffeeScript','jQuery','sqlite','bootstrap','heroku'],
                github:'https://github.com/mnsmsnr/rails_tutorial',
                link:'https://radiant-retreat-93865.herokuapp.com/',
                account:'【動作確認用アカウント】\nexample@railstutorial.org\nfoobar',
            }
    const theWorkout={PJName:'THE WORKOUT',
                img:PJimage2,
                product:'RubyonRailsで開発を行った、筋トレメニューの検索アプリケーションです。\n' +
                        '[ユーザー]と[トレーニングメニュー]のCRUD操作がメインの機能要件となっています。',
                development:'【一からオリジナルのWEBアプリケーションを開発してみたい】という思いから開発しました。\n' +
                            'また、自身の経験から「中堅トレーニーの筋トレメニューマンネリ化を解消する」をテーマにしています。',
                learn:'要件実現コストの見積感覚も、技術選定の指標もなく、全フェーズで多く苦戦しました。\n' +
                        '中でも強く覚えているのは、感覚で使用していたフロント周りの不具合対応や、' +
                        'デプロイ時の環境差異で苦戦した経験から、基礎知識やDevOpsの重要性を強く感じました。\n' +
                        '※本アプリケーションは最低限の実装を終えての仮リリース状態のため、仕様修正や環境移行、リファクタ等の作業を多数残しています。',      
                skills:['Ruby','html','css','JavaScript','RubyonRails','materialize','mysql','jQuery','Nginx','Unicorn','AWS ec2','AWS vpc'],
                github:'https://github.com/mnsmsnr/the_workout',
                link:'http://18.180.225.220:3000/',
                account:'【動作確認用アカウント】\nexample@sample.co.jp\npassword2021 \n' +
                        'アカウントや各種データ作成等、ご自由に操作頂いて結構です。気になる動作やご意見等ございましたら、contactページよりお気軽にご連絡をお願いいたします。',   
            }
    const manasesPortfolio={PJName:'MANASE`s PORTFOLIO',
                img:PJimage3,
                product:'本WEBサイトです。React.jsを使用したポートフォリオサイトとなっています。',
                development:'【自己紹介はもっと効率的に行える】という考えから開発しました。\n' +
                            'また、【開発した制作物・今後開発する制作物をまとめる場所が欲しい】という思いもありました。',
                learn:'フロントエンド、特にJavascriptに知見も経験も多くなかったため、ある程度基礎をインプットしてからの着手となりました。\n' +
                        '苦戦を予想していましたが、静的WEBサイトのためバックエンド処理はなく、' +
                        'Reactの直感的な扱いやすさと充実したライブラリのためか想定より順調に開発が進められました。\n' +
                        '強いて苦戦した箇所が多いのはcssのレイアウト周りでこちらは今後の課題と考えています。\n' +
                        '※現在開発中のため、一部画面が未実装となっています。',      
                skills:['JavaScript','css','React.js','Material-UI','React-Spring','AWS S3','AWS CodePipeline'],
                github:'https://github.com/mnsmsnr/manases_portforio',
                link:'http://manases-portfolio-s3.s3-website-ap-northeast-1.amazonaws.com/',
       }
    let PJs = {PJ1:railsTutorial, PJ2:theWorkout,PJ3:manasesPortfolio}
    return (
        <div>
            <ParallaxSlide PJs = {PJs}/>
        </div>
    );
};