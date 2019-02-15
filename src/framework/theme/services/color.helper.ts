import * as tinycolor from 'tinycolor2';

export class NbColorHelper {

  static shade(color, weight) {
    return tinycolor.mix('#00', color, weight).toRgbString();
  }

  static tint(color, weight) {
    return tinycolor.mix('#fff', color, weight).toRgbString();
  }

  static mix(color1, color2, weight) {
    return tinycolor.mix(color1, color2, weight).toRgbString();
  }

  static adjustHue(color, degree) {
    return tinycolor.spin(color, degree).toRgbString();
  }

  static hexToRgbA(hex, alpha = 1) {
    return tinycolor(hex).setAlpha(alpha).toRgbString();
  }
}
