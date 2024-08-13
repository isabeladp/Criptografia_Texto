//Criar dois vetores com 5 posições um para ler o nome  e outro para ler a altura de pessoas 
//a partir do teclado, criticar para não ter alturas inferiores a zero.
// No final deverá ser impresso o vetor com as informações das pessoas.


main{
    int vet1[5], int vet2[5];

    int temp;

    for(int i=0;i<5;i++){
        
        print("digite o nome:");
        scanf("%d",vet1[i]);
        print("digite a altura:");
               
        scanf("%D",temp);
        if(temp>0){
            vet2[i] = temp;
        };
    }

    for(int i=0;i<5;i++){
        print("")

    return 0
}
