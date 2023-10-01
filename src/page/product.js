import React from 'react';
import { ParallaxSlide } from '../parallax/parallaxSlide';
import PJimage1 from '../images/product/railstutorial.png'
import PJimage2 from '../images/product/the_workout.png'
import PJimage3 from '../images/product/manases_portfolio.png'
import PJimage4 from '../images/product/aice.png'

export const Product = () => {
    const railsTutorial={
        PJName:'Rails Tutorial',
        img:PJimage1,
        product:'RubyonRailsチュートリアルで作成したTwitterライクなwebアプリケーションです。',
        development:'【トレンド技術の習得】と【バックエンド技術向上】を目的としました。\n',
        learn:'MVCモデルやCRUD構造等の基本はJavaで理解済でしたが、より高水準言語の開発速度の速さと' +
                'hash・セッション・Validate・アクティベート等実用技術の基本を学ぶことができました。',
        skills:['Ruby','html','css','JavaScript','RubyonRails','CoffeeScript','jQuery','sqlite','bootstrap','heroku'],
        github:'https://github.com/mnsmsnr/rails_tutorial',
        // link:'https://radiant-retreat-93865.herokuapp.com/',
        // account:'【動作確認用アカウント】\nexample@railstutorial.org\nfoobar',
    }
    const theWorkout={
        PJName:'THE WORKOUT',
        img:PJimage2,
        product:'RubyonRailsで開発を行った、筋トレメニューの検索アプリケーションです。\n' +
                '[ユーザー]と[トレーニングメニュー]のCRUD操作がメインの機能要件となっています。',
        development:'【一からオリジナルのWEBアプリケーションを開発してみたい】という思いから開発しました。\n' +
                        'また、自身の経験から「中堅トレーニーの筋トレメニューマンネリ化を解消する」をテーマにしています。',
        learn:'要件実現コストの見積感覚も、技術選定の指標もなく、全フェーズで多く苦戦しました。\n' +
                '中でも強く覚えているのは、感覚で使用していたフロント周りの不具合対応や、' +
                'デプロイ時の環境差異で苦戦した経験から、基礎知識やDevOpsの重要性を強く感じました。\n',      
        skills:['Ruby','html','css','JavaScript','RubyonRails','materialize','mysql','jQuery','Nginx','Unicorn','AWS ec2','AWS vpc'],
        github:'https://github.com/mnsmsnr/the_workout',
        // link:'http://18.180.225.220:3000/',
        // account:'【動作確認用アカウント】\nexample@sample.co.jp\npassword2021 \n' +
        //         'アカウントや各種データ作成等、ご自由に操作頂いて結構です。気になる動作やご意見等ございましたら、contactページよりお気軽にご連絡をお願いいたします。',   
    }
    const manasesPortfolio={
        PJName:'MANASE`s PORTFOLIO',
        img:PJimage3,
        product:'本WEBサイトです。React.jsを使用したポートフォリオサイトとなっています。',
        development:'【自己紹介はもっと効率的に行える】という考えから開発しました。\n' +
                        'また、【開発した制作物・今後開発する制作物をまとめる場所が欲しい】という思いもありました。',
        learn:'フロントエンド、特にJavascriptに知見も経験も多くなかったため、ある程度基礎をインプットしてからの着手となりました。\n' +
                '苦戦を予想していましたが、静的WEBサイトのためバックエンド処理はなく、' +
                'Reactの直感的な扱いやすさと充実したライブラリのためか想定より順調に開発が進められました。\n' +
                '強いて苦戦した箇所が多いのはcssのレイアウト周りでこちらは今後の課題と考えています。\n',  
        skills:['JavaScript','css','React.js','Material-UI','React-Spring','AWS S3','AWS CodePipeline'],
        github:'https://github.com/mnsmsnr/manases_portforio',
        link:'http://manases-portforio.s3-website-ap-northeast-1.amazonaws.com/',
    }
    const aice={
        PJName:'aice',
        img:PJimage4,
        product:'チャット英会話をAI相手に行えるサービスです。',
        development:'【エンジニアとしての英語学習に効率的なツールが欲しい】という思いから開発しました。\n' +
                'モダン技術では避けて通れない英語ドキュメントの読解効率と、グローバル人材とのコミュニケーションという課題が根底にあります。',
        learn:'フロント（react）：ポートフォリオサイト制作の際のreact知見があったため、前回課題の煩雑なcss等の撲滅とディレクトリ設計に気を付けました。\n' +
                'サーバー（python）：pythonは未経験でしたが一般的なCRUD処理は苦労せず。openAiとdeepleの外部API使用と、flackのログイン周り機能が未経験で少し時間がかかりました。 \n' +
                'DB（postgreSQL）：複雑なDB設計を行うほど多機能でないので最低限の実装ですが、コンテナ構築時の自動初期構築の設定による保守性を意識しました。 \n',
        skills:['React.js','Material-UI','Python3','flack', 'postgreSQL','openAI API', 'DeepL API','AWS ecs'],
        github:'https://github.com/mnsmsnr/aice',
        link:'https://aice-lb-296492510.ap-northeast-1.elb.amazonaws.com/',
        account:'※デプロイ先リンクを追加していますが、試作品の仮公開のため色々と荒い部分がありますのでご容赦ください。 \n' +
        ' ログイン用サンプルユーザ情報はログイン画面にあり動作確認いただけますが、チャットログはアカウントに残りますので情報の取り扱いにはご注意願います。 \n' +
        ' サインアップには2FA認証等を導入していませんでのダミーアドレスで任意のユーザ作成等はご自由に操作ください。登録データは公開終了時にec2コンテナ自体削除いたします。 \n',
    }
    let PJs = {PJ1:railsTutorial, PJ2:theWorkout, PJ3:manasesPortfolio, PJ4:aice}
    return (
        <div>
            <ParallaxSlide PJs = {PJs}/>
        </div>
    );
};