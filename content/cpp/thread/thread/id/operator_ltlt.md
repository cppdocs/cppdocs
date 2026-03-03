---
title: "operator<<(std::thread::id)"
source_path: "cpp/thread/thread/id/operator"
header: "<thread>"
category: "thread"
since: "C++11"
---

Writes a textual representation of a thread identifier id to the output stream ost.

## Declarations
```cpp
template< class CharT, class Traits >
std::basic_ostream<CharT,Traits>&
operator<<( std::basic_ostream<CharT,Traits>& ost, std::thread::id id );
```
_(since C++11)_

## Parameters
- `ost`: output stream to insert the data into
- `id`: thread identifier

## Return value
ost

## Example
```cpp
#include <chrono>
#include <iostream>
#include <thread>
using namespace std::chrono;
 
int main()
{
    std::thread t1([]{ std::this_thread::sleep_for(256ms); });
    std::thread t2([]{ std::this_thread::sleep_for(512ms); });
 
    std::clog << t1.get_id() << '\n' << t2.get_id() << '\n';
 
    t1.join();
    t2.join();
}
```
