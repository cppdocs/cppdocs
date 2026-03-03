---
title: "std::basic_ios<CharT,Traits>::~basic_ios"
source_path: "cpp/io/basic_ios/~basic_ios"
category: "io"
---

Destroys the basic_ios object. rdbuf is not destroyed.

## Declarations
```cpp
virtual ~basic_ios();
```

## Notes
This destructor is virtual because the base class destructor, [ios_base::~ios_base](/cpp/io/ios_base/~ios_base/) is virtual.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 53 | C++98 | it was unspecified whether rdbuf is destroyed | it is not destroyed |
