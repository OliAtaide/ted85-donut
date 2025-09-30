$("#endContainer").hide();

const items = [
  {
    title:
      "Abordagens culturalmente sensíveis e adaptadas às tradições das comunidades indígenas",
    text: "Uma abordagem culturalmente sensível para o cuidado do câncer de mama e do colo do útero em comunidades indígenas envolve o reconhecimento e valorização das tradições locais, colaboração com líderes comunitários e curadores tradicionais, adaptação da educação em saúde e prestação de serviços de saúde respeitosos e acessíveis. Uma abordagem sensível à cultura poderia, por exemplo, envolver o reconhecimento e respeito pelo conhecimento e práticas de curadores tradicionais, trabalhando em conjunto com eles para fornecer informações sobre prevenção, detecção precoce e tratamento do câncer de mama e colo do útero.",
  },
  {
    title:
      "Capacitação de profissionais de saúde para o entendimento e respeito às práticas e crenças culturais das mulheres indígenas",
    text: " A capacitação de profissionais de saúde para o entendimento e respeito às práticas e crenças culturais das mulheres indígenas é crucial para garantir que os cuidados de saúde sejam prestados de forma sensível e culturalmente competente. Isso pode ser realizado por meio de programas de treinamento que abordam temas como história e cultura das comunidades indígenas locais, protocolos de comunicação culturalmente sensíveis, e a importância de reconhecer e respeitar as práticas tradicionais de saúde. Os profissionais de saúde também podem ser capacitados em habilidades de comunicação intercultural e técnicas de escuta empática que reconhecem e validam as experiências e perspectivas das mulheres indígenas.",
  },
  {
    title:
      "Facilitar o acesso aos serviços de saúde também de forma itinerante",
    text: "O Subsistema de Saúde Indígena, coordenado pela Secretaria Especial de Saúde Indígena (SESAI), opera unidades de saúde móveis em regiões remotas e de difícil acesso em todo o país. Essas unidades móveis são equipadas com equipes de profissionais de saúde que viajam regularmente para comunidades indígenas para fornecer cuidados de saúde preventivos, tratamento e educação em saúde. Verifique a composição da Rede de Saúde de sua região para mobilizar os recursos de forma oportuna.",
  },
  {
    title:
      "Investir em ações educativas para aumentar a conscientização do problema",
    text: "Atividades educativas que abordam temas como os fatores de risco para o câncer de mama e colo do útero, importância dos exames de rotina, bem como os serviços de saúde disponíveis para prevenção e tratamento desses cânceres podem ser realizadas de forma ampliada. Discutir tabus relacionados à saúde reprodutiva e sexual com adolescentes e jovens pode desmistificar concepções errôneas e promover uma compreensão mais ampla sobre essas questões.",
  },
];

$("#modalContainer").html(
  items
    .map(
      (item, index) =>
        `
        <div class="modal fade" id="circleModal${index}" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <div class="modal-body">
                <div class="modal-title">
                  ${item.title}
                </div>
                <div class="modal-text">
                  ${item.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join("")
);

$("#nextBtn").click(function () {
  $("#mainContainer").hide();
  $(".subheader").hide();
  $("#endContainer").show();
});

$("#backBtn").click(function () {
  $("#mainContainer").show();
  $(".subheader").show();
  $("#endContainer").hide();
});
