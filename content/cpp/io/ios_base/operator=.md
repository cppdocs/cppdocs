---
title: "std::ios_base::operator="
source_path: "cpp/io/ios_base/operator"
category: "io"
since: "C++11"
---

The copy assignment operator is private(until C++11)deleted(since C++11): streams are not copy-assignable.

## Declarations
```cpp
private:
ios_base& operator=( const ios_base& );
```
_(until C++11)_

```cpp
public:
ios_base& operator=( const ios_base& ) = delete;
```
_(since C++11)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 50 | C++98 | the copy assignment operator was not specified | specified as private |
