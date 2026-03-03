---
title: "std::launch"
source_path: "cpp/thread/launch"
header: "<future>"
category: "thread"
since: "C++11"
---

std::launch is a [BitmaskType](/cpp/named_req/bitmasktype/). It specifies the launch policy for a task executed by the [std::async](/cpp/thread/async/) function.

## Declarations
```cpp
enum class launch : /* unspecified */ {
async = /* unspecified */,
deferred = /* unspecified */,
/* implementation-defined */
};
```
_(since C++11)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2102 | C++11 | std::launch was an implementation-defined type | it is not implementation-defined |

## See also
- [async](/cpp/thread/async/)
- [std::future](/cpp/thread/future/)
