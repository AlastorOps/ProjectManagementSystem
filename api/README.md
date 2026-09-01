# API

REST API design and contract docs — the shared surface between [frontend](../frontend/README.md) and [backend](../backend/README.md).

Per [Role_Requirment.md](../Role_Requirment.md), this area owns:

- REST API design
- User / Authentication APIs
- Project / Task / Team APIs
- Milestone / Calendar / Kanban / Gantt APIs
- Time Tracking / Notification / Report / KPI APIs

## Status

No endpoints designed here yet. The only implemented endpoint so far is `GET /api/health`, defined directly in the backend — see [backend/README.md](../backend/README.md#api-endpoints).

## Intent

As endpoints are designed, document them here (e.g. one file per resource, or an OpenAPI/Swagger spec) so frontend and backend can build against an agreed contract before implementation lands. Suggested layout once work starts:

```
api/
  README.md
  openapi.yaml        # or per-resource .md files
```

## Contributing

See the root [README](../README.md) and [Contributing.md](../Contributing.md) for branch naming (`api/<task>`) and PR workflow.
