$('#spectroscopy').on('change', function() {
if($(this).val()=='xrd'){$('#txaxis').html('2 Theta');$('#tyaxis').html('Intensity(a.u.)')}
else if($(this).val()=='uv-vis'){$('#txaxis').html('Wavelength(nm)');$('#tyaxis').html('Absorption(a.u.)')}
else if($(this).val()=='ftir'){$('#txaxis').html('Wavenumber(cm-1)');$('#tyaxis').html('Transmission(%)')}
else if($(this).val()=='raman'){$('#txaxis').html('Raman Shift(cm-1)');$('#tyaxis').html('Intensity(a.u.)')}
else if($(this).val()=='nmr'){$('#txaxis').html('ppm');$('#tyaxis').html('Absorbance(a.u.)')}
else if($(this).val()=='pl'){$('#txaxis').html('Wavelength(nm)');$('#tyaxis').html('Intensity(a.u.)')}
else if($(this).val()=='xps'){$('#txaxis').html('Binding Energy(nm)');$('#tyaxis').html('Intensity(a.u.)')}
else if($(this).val()=='mass-spectra'){$('#txaxis').html('Mass(m/z)&nbsp;Daltons');$('#tyaxis').html('Intensity(a.u.)')}
else if($(this).val()=='eds'){$('#txaxis').html('Energy(KeV)');$('#tyaxis').html('Intensity(counts)')}
else if($(this).val()=='dls'){$('#txaxis').html('Size(nm)');$('#tyaxis').html('Percent(%)')}
else if($(this).val()=='dsc'){$('#txaxis').html('Temperature(°C)');$('#tyaxis').html('Heat&nbsp;Flow(mW)')}
else if($(this).val()=='tga'){$('#txaxis').html('Temperature(°C)');$('#tyaxis').html('Weight(%)')}
else if($(this).val()=='bet'){$('#txaxis').html('Relative Pressure');$('#tyaxis').html('Absorbed Volume')}
});
