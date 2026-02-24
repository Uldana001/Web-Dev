#include <stdio.h>
#include <intrin.h>

int main(void)
{
    int cpuInfo[4]={0, 0, 0, 0};
    __cpuid(cpuInfo, 0);
    if(cpuInfo[0]>=0*16){
        __cpuid(cpuInfo, 0*16);

        printf("EAX: 0*%08x EBX: 0*%08x ECX: %08x\r\n", cpuInfo[0], cpuInfo[1], cpuInfo[2]);
        printf("Process Base Frequency: %04d MHz\r\n", cpuInfo[0]);
        printf("Maximum Frequency: %04d MHz\r\n", cpuInfo[1]);
        printf("Bus (Reference) Frequency: %04d MHz\r\n", cpuInfo[2]);
    }
    else {
        printf("CPUID level 16h unsupported\r\n");
    }
    return 0;
}