---
title: "std::istream_iterator<T,CharT,Traits,Distance>::istream_iterator"
source_path: "cpp/iterator/istream_iterator/istream_iterator"
category: "iterator"
since: "C++11"
---

1,2) Constructs the end-of-stream iterator, value-initializes the stored value. This constructor is constexpr if the initializer in the definition auto x = T(); is a constant initializer(since C++11).

## Declarations
```cpp
istream_iterator();
```
_(until C++11)_

```cpp
constexpr istream_iterator();
```
_(since C++11)_

```cpp
constexpr istream_iterator( std::default_sentinel_t );
```
_(since C++20)_

```cpp
istream_iterator( istream_type& stream );
```

```cpp
istream_iterator( const istream_iterator& other );
```
_(until C++11)_

```cpp
istream_iterator( const istream_iterator& other ) = default;
```
_(since C++11)_

## Parameters
- `stream`: stream to initialize the istream_iterator with
- `other`: another istream_iterator of the same type

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <sstream>
 
int main()
{
    std::istringstream stream("1 2 3 4 5");
    std::copy(
        std::istream_iterator<int>(stream),
        std::istream_iterator<int>(),
        std::ostream_iterator<int>(std::cout, " ")
    );
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1280 | C++98 | overload (3) stored stream directly | stores its address instead |
| P0738R2 | C++98 | the first read might be deferred to the first dereference | always performed in the constructor |
