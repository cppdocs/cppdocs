---
title: "std::experimental::nonesuch"
source_path: "cpp/experimental/nonesuch"
header: "<experimental/type_traits>"
category: "experimental"
---

std::experimental::nonesuch is a class type used by [std::experimental::detected_t](/cpp/experimental/is_detected/) to indicate detection failure.

## Declarations
```cpp
struct nonesuch {
~nonesuch() = delete;
nonesuch(nonesuch const&) = delete;
void operator=(nonesuch const&) = delete;
};
```
_(library fundamentals TS v2)_

## Notes
nonesuch cannot be constructed, destroyed, or copied.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2960 | LFTSv2 | nonesuch may be an aggregate and has an implicit conversion sequence from {} | made non-aggregate and removed ICS |
