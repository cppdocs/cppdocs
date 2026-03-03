---
title: "std::basic_ios<CharT,Traits>::basic_ios"
source_path: "cpp/io/basic_ios/basic_ios"
category: "io"
since: "C++11"
---

Constructs a new std::basic_ios object.

## Declarations
```cpp
protected:
basic_ios();
```

```cpp
public:
explicit basic_ios( std::basic_streambuf<CharT, Traits>* sb );
```

```cpp
private:
basic_ios( const basic_ios& );
```
_(until C++11)_

```cpp
public:
basic_ios( const basic_ios& ) = delete;
```
_(since C++11)_

## Parameters
- `sb`: stream buffer to associate to

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1249 | C++98 | internal state did not need to be initialized before first use | also needs to be initialized |
