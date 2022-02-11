import React from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected"; 
import '@amcharts/amcharts4/charts';
import styles from '../style/styles.module.css'

export const MindMap = () => {
  let series = [null,null];
  for (let i = 0; i < 2; i++) {
    if(i===1){
      let frontBackTree = am4core.create("frontBackTree", am4plugins_forceDirected.ForceDirectedTree);
      series[i] = frontBackTree.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
      series[i].data = [
        {
          "name": "フロントエンド", "value": 700, "color": "#1E07B0",
          "children": [{
            "name": "HTML", "value": 400,
          }, {
            "name": "CSS", "value": 400
          }, {
            "name": "Java\nScript", "value": 400,
            "children": [{
              "name": "React", "value": 200
            }, {
              "name": "vue", "value": 200
            }, {
              "name": "jQuery", "value": 200
            }]
          }]
        }, {
          "name": "バックエンド", "value": 700, "color": "#0AAE43",
          "children": [{
            "name": "Java", "value": 400,
            "children": [{
              "name": "selenium", "value": 200
            }, {
              "name": "JSF", "value": 200
            }]
          }, {
            "name": "C#", "value": 400
          }, {
            "name": "Ruby", "value": 400,
            "children": [{
              "name": "Rubyon\nRails", "value": 200
            }]
          }, {
            "name": "PHP", "value": 400,
            "children": [{
              "name": "Laravel", "value": 200
            }]
          }, {
            "name": "Type\nScript", "value": 400
          }, {
            "name": "DB", "value": 400,
            "children": [{
              "name": "Oracle\nSQL", "value": 200
            }, {
              "name": "SQL\nserver", "value": 200
            }, {
              "name": "Postgre\nSQL", "value": 200
            }, {
              "name": "MySQL", "value": 200
            }]
          }]
        }
      ];
    } else {
      let infraToolTree = am4core.create("infraToolTree", am4plugins_forceDirected.ForceDirectedTree);
      series[i] = infraToolTree.series.push(new am4plugins_forceDirected.ForceDirectedSeries());
      series[i].data = [
        {
          "name": "インフラ", "value": 700, "color": "#FF4747",
          "children": [{
            "name": "AWS", "value": 400,
            "children": [{
              "name": "EC2", "value": 200
            }, {
              "name": "VPC", "value": 200
            }, {
              "name": "S3", "value": 200
            }, {
              "name": "Code\nPipeline", "value": 200
            }, {
              "name": "Cloud9", "value": 200
            }]
          }, {
            "name": "Linux", "value": 200
          }, {
            "name": "Docker", "value": 200
          }]
        }, {
          "name": "ツール", "value": 700, "color": "#574CA9",
          "children": [{
            "name": "IDE・\nエディタ", "value": 400,
            "children": [{
              "name": "code\nready", "value": 200
            }, {
              "name": "eclipse", "value": 200
            }, {
              "name": "Visual\nStudio", "value": 200
            }, {
              "name": "VScode", "value": 200
            }]
          }, {
            "name": "A5:SQL\nMk-2", "value": 200
          }]
        }
      ];
    }
    series[i].dataFields.value = "value";
    series[i].dataFields.name = "name";
    series[i].dataFields.children = "children";
    series[i].dataFields.color = "color";
    series[i].nodes.template.label.text = "{name}";
    series[i].fontSize = '1pem';
    series[i].minRadius = 15;
    series[i].maxRadius = 70;
  }

  return (
      <div className={styles.mindMapContainer}>
        <div id="frontBackTree" style={{ width: '95vw', height: '100vh', margin: '3vw'}}></div>
        <div id="infraToolTree" style={{ width: '95vw', height: '100vh', margin: '3vw'}}></div>
      </div>
  );
}

