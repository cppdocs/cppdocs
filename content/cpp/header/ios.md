---
title: "Standard library header <ios>"
source_path: "cpp/header/ios"
category: "header"
---

This header is part of the [Input/Output](/cpp/io/) library.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 35 | C++98 | the prototypes of unitbuf and nounitbuf were missing in the synopsis | added |
| LWG 78 | C++98 | the type of parameter fn of ios_base::register_callbackin the synopsis was misspecified as event_call_back | corrected toevent_callback |
