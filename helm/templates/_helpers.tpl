{{/*
Name of the chart.
*/}}
{{- define "app.name" -}}
{{- .Chart.Name | trunc 63 | trimSuffix "-" }}
{{- end }}
