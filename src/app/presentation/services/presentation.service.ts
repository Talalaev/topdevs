import { Injectable } from '@angular/core';

@Injectable()
export class PresentationService {

  constructor() { }

  async getCampaing(): Promise<Campaign> {
    return {
      'canvas': {
          'display_height': 1080,
          'display_width': 1920,
          'diagonal': 27,
          'height': 1,
          'width': 1,
          'orientation': 'landscape'
        },
      'title': 'Test Campaign',
      'slides': [
        {
          'delay': 3,
          'elements': [
            {
              'style': {
                'background-color': '#ace100',
                'color': '#000'
              },
              'layout': {
                'bottom': 0,
                'right': 0,
                'top': 0,
                'left': 0
              },
              'type': 'shape',
              'token': '5ab8fd1e051faedf1c0af1ef'
            },
            {
              'name': '01-2017-porsche-911-turbo-s-fd-1.jpg',
              'media': {
                'token': '9cf02c20-6adf-4b2c-bd9f-0331f467341d',
                'mime': 'image/png'
              },
              'style': {
                'background-color': null,
                'color': '#000'
              },
              'layout': {
                'bottom': 39.074074074074076,
                'right': 25.937500000000007,
                'top': 7.4074074074074066,
                'left': 28.854166666666664
              },
              'type': 'media',
              'token': '5ab8fdd7051faedf1c0af1f0'
            },
            {
              'html': {
                'text': `<p style=\"text-align: center;\"><span style=\"color: #fb0f2e; font-size: 20px;\"><strong snap-binding="fa5ab8fdd7edf1c0af1f0051">Test campaign. Slide 1.</strong></span></p>`
              },
              'style': {
                'background-color': null,
                'color': '#000'
              },
              'layout': {
                'bottom': 2.962962962962962,
                'right': 25.83333333333332,
                'top': 63.70370370370371,
                'left': 28.958333333333336
              },
              'type': 'text',
              'token': '5ab8fdf0051faedf1c0af1f1'
            }
          ],
          'token': '5ab8fd0d051faedf1c0af1ee'
        },
        {
          'delay': 6,
          'elements': [
            {
              'style': {
                'background-color': '#e1a323',
                'color': '#000'
              },
              'layout': {
                'bottom': 0,
                'right': 0,
                'top': 0,
                'left': 0
              },
              'type': 'shape',
              'token': '5ab8fd1e051faedf1c0af1ef'
            },
            {
              'name': '01-2017-porsche-911-turbo-s-fd-1.jpg',
              'media': {
                'token': '9510d1a6-fd3d-43dc-bb0a-585a4cd40f2a',
                'mime': 'video/webm',
                'meta': {
                  'width': 1280,
                  'height': 720
                }
              },
              'style': {
                'background-color': null,
                'color': '#000'
              },
              'layout': {
                'bottom': 39.074074074074076,
                'right': 25.937500000000007,
                'top': 7.4074074074074066,
                'left': 28.854166666666664
              },
              'type': 'media',
              'token': '5ab8fdd7051faedf1c0af1f0'
            },
            {
              'html': {
                'text': `<p style=\"text-align: center;\"><span style=\"color: #fb0f2e; font-size: 20px;\"><strong snap-binding="fa5ab8fdd7edf1c0af1f0051">Test campaign. Slide 2.</strong></span></p>`
              },
              'style': {
                'background-color': null,
                'color': '#000'
              },
              'layout': {
                'bottom': 2.962962962962962,
                'right': 25.83333333333332,
                'top': 63.70370370370371,
                'left': 28.958333333333336
              },
              'type': 'text',
              'token': '5ab8fdf0051faedf1c0af1f1'
            }
          ],
          'token': '5ab8fd0d051faedf1c0af1ee'
        },
        {
          'delay': 1,
          'elements': [
            {
              'style': {
                'background-color': '#b56de1',
                'color': '#000'
              },
              'layout': {
                'bottom': 0,
                'right': 0,
                'top': 0,
                'left': 0
              },
              'type': 'shape',
              'token': '5ab8fd1e051faedf1c0af1ef'
            },
            {
              'name': '01-2017-porsche-911-turbo-s-fd-1.jpg',
              'media': {
                'token': '9cf02c20-6adf-4b2c-bd9f-0331f467341d',
                'mime': 'image/png'
              },
              'style': {
                'background-color': null,
                'color': '#000'
              },
              'layout': {
                'bottom': 39.074074074074076,
                'right': 25.937500000000007,
                'top': 7.4074074074074066,
                'left': 28.854166666666664
              },
              'type': 'media',
              'token': '5ab8fdd7051faedf1c0af1f0'
            },
            {
              'html': {
                'text': `<p style=\"text-align: center;\"><span style=\"color: #fb0f2e; font-size: 20px;\"><strong snap-binding="fa5ab8fdd7edf1c0af1f0051">Test campaign. Slide 3.</strong></span></p>`
              },
              'style': {
                'background-color': null,
                'color': '#000'
              },
              'layout': {
                'bottom': 2.962962962962962,
                'right': 25.83333333333332,
                'top': 63.70370370370371,
                'left': 28.958333333333336
              },
              'type': 'text',
              'token': '5ab8fdf0051faedf1c0af1f1'
            }
          ],
          'token': '5ab8fd0d051faedf1c0af1ee'
        }
      ],
      'token': '5ab8fd0d3f78390025080272'
    };
  }
}
