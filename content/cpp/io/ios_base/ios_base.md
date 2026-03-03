---
title: "std::ios_base::ios_base"
source_path: "cpp/io/ios_base/ios_base"
category: "io"
since: "C++11"
---

1) The copy constructor is private(until C++11)deleted(since C++11): streams are not copyable.

## Declarations
```cpp
private:
ios_base( const ios_base& );
```
_(until C++11)_

```cpp
public:
ios_base( const ios_base& ) = delete;
```
_(since C++11)_

```cpp
protected:
ios_base();
```

## Notes
The same applies to the constructors of the next class in the I/O hierarchy, [std::basic_ios](/cpp/io/basic_ios/). Further-derived classes ([std::istream](/cpp/io/basic_istream/) and [std::ostream](/cpp/io/basic_ostream/)) are always constructed with a concrete stream buffer object and call [std::basic_ios::init()](/cpp/io/basic_ios/init/), possibly more than once, to complete initialization of their virtual base.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 50 | C++98 | the copy constructor was not specified | specified as private |
| LWG 220 | C++98 | the behavior of destroying a std::ios_baseobject before calling its init() was not clear | the behavior isundefined in this case |
| LWG 1249 | C++98 | initialization did not need to be completed before first use | also needs to be completed |
