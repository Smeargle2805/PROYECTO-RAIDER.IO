import { getRegion } from '../funcionalidad/GPS';

describe('getRegion function', () => {
  it('regresa "us" cuando las coordenadas se encuentran dentro del rango de America y Oceania', () => {
    const result = getRegion(14.0818, -87.2068);
    expect(result).toBe('us');
  });

  it('regresa "tw" cuando las coordenadas se encuentran dentro del rango de Taiwan', () => {
    const result = getRegion(24.1477, 120.6736);
    expect(result).toBe('tw');
  });

  it('regresa "kr" cuando las coordenadas se encuentran dentro del rango de Corea', () => {
    const result = getRegion(37.5665, 126.978);
    expect(result).toBe('kr');
  });

  it('regresa "eu" cuando las coordenadas se encuentran dentro del rango de Europa', () => {
    const result = getRegion(51.1657, 10.4515);
    expect(result).toBe('eu');
  });

  it('regresa "cn" cuando las coordenadas se encuentran dentro del rango de China', () => {
    const result = getRegion(39.9042, 116.4074);
    expect(result).toBe('cn');
  });

  it('regresa un string vacio cuando las coordenadas con coinciden con ninguna region', () => {
    const result = getRegion(0, 0)
    expect(result).toBe('');
  });
});
