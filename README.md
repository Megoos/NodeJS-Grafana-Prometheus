# Visualizing metrics from the NodeJS application with Prometheus and Grafana

`Experiment with memory leak in NodeJS`

## Run

```bash
docker-compose up -d
```

`http://localhost:9200` - App
`http://localhost:9090/targets` - Prometheus
`http://localhost:3000` - Grafana, login (admin:illchangeitanyway)

## Load the server with requests

```bash
ab -n 600 -c 8 http://localhost:9200/leak
```
