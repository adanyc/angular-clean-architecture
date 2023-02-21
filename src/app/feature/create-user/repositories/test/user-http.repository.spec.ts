import { UserHttpRepository } from '../user-http.repository';
import { HttpClient } from '@angular/common/http';
import { User } from '../../domains/user';
import { of } from 'rxjs';
import { Response } from '../../domains/response';
import { UserResponseAdapter, UserResponseDto } from '../user-response.adapter';

describe('@UserHttpRepository', () => {
  let httpClientStub: jasmine.SpyObj<HttpClient>;
  let userHttpRepository: UserHttpRepository;

  beforeEach(() => {
    // Crear un objeto spy para HttpClient
    httpClientStub = jasmine.createSpyObj('HttpClient', ['post']);

    // Crear una instancia de UserHttpRepository con el objeto Stub de HttpClient
    userHttpRepository = new UserHttpRepository(httpClientStub);
  });

  describe('when executing create method', () => {
    it('#should return the response from the backend', async () => {
      // Arrange
      // Crear un objeto User para la prueba
      const userMock = new User('John', 'Doe', 38);
      // Crear un objeto UserResponseDto para simular la respuesta del servidor
      const userResponseDtoMock: UserResponseDto = { message: 'created' };
      // Crear un objeto Response usando UserResponseAdapter para comparar con la respuesta esperada
      const expectedResponseMock: Response = new UserResponseAdapter(userResponseDtoMock);
      // Configurar el objeto Stub para devolver un observable que emita el objeto userResponseDto
      httpClientStub.post.and.returnValue(of(userResponseDtoMock));

      // Act
      // Llamar al método create del UserHttpRepository
      const response: Response | undefined = await userHttpRepository.create(userMock);

      // Assert
      // Verificar que la respuesta sea la esperada
      expect(response).toEqual(expectedResponseMock);
    });
  });
});
